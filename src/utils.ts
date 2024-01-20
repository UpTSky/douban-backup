import dotenv from 'dotenv';
import { ItemCategory } from './types';

dotenv.config();

/**
 * Retrieves the database ID for the given category.
 *
 * @param {ItemCategory} category - The category of the item.
 * @returns {string} The corresponding database ID.
 */
export function getDBID(category: ItemCategory): string {
  const databasesMap = {
    [ItemCategory.Movie]: process.env.NOTION_MOVIE_DATABASE_ID,
    [ItemCategory.Music]: process.env.NOTION_MUSIC_DATABASE_ID,
    [ItemCategory.Book]: process.env.NOTION_BOOK_DATABASE_ID,
    [ItemCategory.Game]: process.env.NOTION_GAME_DATABASE_ID,
    [ItemCategory.Drama]: process.env.NOTION_DRAMA_DATABASE_ID,
  };
  return databasesMap[category] as string;
}

/**
 * Delays the execution of a function by a specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to sleep
 * @return {Promise<void>} A Promise that resolves after the specified number of milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}