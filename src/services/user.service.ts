import { ENDPOINTS } from '@constants';
import { IUser } from '@type/user.type';
import client from 'api/client';

export class UserService {
  static endpoint = ENDPOINTS.USERS;

  static async getAll(): Promise<IUser[]> {
    const response = await client.get(UserService.endpoint);
    return response?.data || [];
  }

  static async validateUser(username: string): Promise<IUser> {
    const users = await client.get(UserService.endpoint);
    const user = users.data.find((u: IUser) => u.username === username);
    return user;
  }
}
