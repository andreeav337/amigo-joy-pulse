import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Ruta para crear un nuevo pedido
  app.post("/api/orders", async (req, res) => {
    try {
      const validatedOrder = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedOrder);
      res.json({ success: true, order });
    } catch (error) {
      console.error("Error creating order:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Datos inválidos", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Error interno del servidor" 
        });
      }
    }
  });

  // Ruta para obtener todos los pedidos
  app.get("/api/orders", async (req, res) => {
    try {
      const orders = await storage.getAllOrders();
      res.json({ success: true, orders });
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ 
        success: false, 
        error: "Error interno del servidor" 
      });
    }
  });

  // Ruta para obtener un pedido específico
  app.get("/api/orders/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const order = await storage.getOrder(id);
      
      if (!order) {
        res.status(404).json({ 
          success: false, 
          error: "Pedido no encontrado" 
        });
        return;
      }
      
      res.json({ success: true, order });
    } catch (error) {
      console.error("Error fetching order:", error);
      res.status(500).json({ 
        success: false, 
        error: "Error interno del servidor" 
      });
    }
  });

  // Ruta para actualizar el estado de un pedido
  app.patch("/api/orders/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status) {
        res.status(400).json({ 
          success: false, 
          error: "Estado requerido" 
        });
        return;
      }
      
      const order = await storage.updateOrderStatus(id, status);
      
      if (!order) {
        res.status(404).json({ 
          success: false, 
          error: "Pedido no encontrado" 
        });
        return;
      }
      
      res.json({ success: true, order });
    } catch (error) {
      console.error("Error updating order status:", error);
      res.status(500).json({ 
        success: false, 
        error: "Error interno del servidor" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
