import { Injectable, ConflictException, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types  } from 'mongoose';
import { User } from './user.schema';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async signup(signupDto: SignupDto): Promise<User> {
    const { email, password, username } = signupDto;

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    // Create a new user
    const createdUser = new this.userModel({
      email,
      password, // Store the password as is (you can hash it if needed)
      username,
    });

    return createdUser.save();
  }
 // Method to get all users
 async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Method to get user by ID
  async getUserById(id: string): Promise<User> {
    // Validate ObjectId format
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid user ID format');
    }

    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
