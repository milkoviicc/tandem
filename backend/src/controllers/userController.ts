import {Request, Response} from 'express';
import { comparePasswords, hashPassword } from "../services/authService";
import sql from 'msnodesqlv8';
import { request } from '../db'; // Import the reusable request function
import { generateToken } from '../utils/jwtService';

interface User {
    fullName: string,
    email: string,
    passwordHash: string,
}

const users: User[] = [];

export async function registerUser(req: Request, res: Response) {
    const {fullName, email, password} = req.body;

    if(!fullName || !email || !password) {
        return res.status(400).json({message: 'All fields are required'});
    }

    try {
        const requestInstance = await request();
        const existingUser = await requestInstance
            .input('Email', email)
            .query('SELECT * FROM Users WHERE Email = @Email');
    
        if (existingUser.recordset.length > 0) {
            return res.status(400).json({ message: 'Email is already in use' });
        }
    } catch (error) {
        console.error('Error checking user existence:', error);
        return res.status(500).json({message: 'Internal server error'});
    }

    try {
        const hashedPassword = await hashPassword(password);
        const requestInstance = await request();

        const currentTimestamp = new Date();

        await requestInstance
            .input('FullName', fullName)
            .input('Email', email)
            .input('Password', hashedPassword)
            .input('Created_at', currentTimestamp)
            .query(`
                INSERT INTO Users (FullName, Email, Password, Created_at)
                VALUES (@FullName, @Email, @Password, @Created_at)
            `);
    } catch (error: any) {
        console.error('Error registering user:', error?.message || error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}

export async function loginUser(req: Request, res: Response) {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({message: 'All fields are required'});
    }

    try {
        const requestInstance = await request();
        const user = await requestInstance
            .input('Email', email)
            .query('SELECT * FROM Users WHERE EMAIL = @Email')

        if (user.recordset.length === 0) {
            return res.status(404).json({message: 'User not found'});
        } else {
            const userData = user.recordset[0];
            const isPasswordValid = await comparePasswords(password, userData.Password);

            if (!isPasswordValid) {
                return res.status(401).json({message: 'Invalid password'});
            }

            const token = generateToken({ id: userData.Id, email: userData.Email });

            res.status(200).json({
                message: 'Login successful',
                token,
                user: {
                    id: userData.id,
                    fullName: userData.FullName,
                    email: userData.Email,
                }
            })
        }
    } catch (error) {
        console.error('Error logging in user:', error);
    }
}

export async function getUserId(req: Request, res: Response) {
    const email = req.query.email as string;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const requestInstance = await request();
        const user = await requestInstance
            .input('Email', email)
            .query('SELECT Id FROM Users WHERE Email = @Email');

        if (user.recordset.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userId = user.recordset[0].Id;
        res.status(200).json({ userId });
    } catch (error) {
        console.error('Error retrieving user ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
