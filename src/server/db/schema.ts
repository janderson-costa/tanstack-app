// Define your database tables here using Drizzle ORM
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const tasks = pgTable('tasks', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	description: text('description'),
	status: text('status').notNull(),
	priority: text('priority').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
