import { pgTable, text, serial, integer, boolean, timestamp, decimal, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Tabla para almacenar pedidos de joyería
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  // Información del cliente
  customerName: text("customer_name").notNull(),
  customerLastName: text("customer_last_name").notNull(),
  customerEmail: text("customer_email"),
  customerPhone: text("customer_phone").notNull(),
  customerCellphone: text("customer_cellphone"),
  
  // Dirección
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state"),
  postalCode: text("postal_code"),
  
  // Detalles del pedido
  baseType: text("base_type").notNull(), // "collar-cadena-dorada", etc.
  baseName: text("base_name").notNull(),
  basePrice: decimal("base_price", { precision: 10, scale: 2 }).notNull(),
  
  // Dijes como JSON
  charms: jsonb("charms").notNull(), // { "letra-a": 2, "corazon-rojo": 1 }
  charmsText: text("charms_text"), // Descripción de los dijes
  orderInstructions: text("order_instructions"), // Cómo ordenar los dijes
  
  // Entrega y precios
  deliveryMethod: text("delivery_method").notNull(), // "retiro" o "envio"
  shippingCity: text("shipping_city"), // "guayaquil" o "fuera" si es envío
  shippingCost: decimal("shipping_cost", { precision: 10, scale: 2 }).notNull().default("0"),
  subtotal: decimal("subtotal", { precision: 10, scale: 2 }).notNull(),
  total: decimal("total", { precision: 10, scale: 2 }).notNull(),
  
  // Estado del pedido
  status: text("status").notNull().default("pending"), // "pending", "processing", "completed", "cancelled"
  
  // Timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;
