// ======================================
// Cafe Fast Food Mohsen Server
// ======================================

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ======================================
// تنظیمات
// ======================================

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// ======================================
// مسیر پوشه دیتا
// ======================================

const dataFolder = path.join(__dirname, "data");
const ordersFile = path.join(dataFolder, "orders.json");
const productsFile = path.join(dataFolder, "products.json");

// ======================================
// ساخت پوشه و فایل‌های دیتا در صورت نبود
// ======================================

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder, { recursive: true });
}

if (!fs.existsSync(ordersFile)) {
    fs.writeFileSync(ordersFile, "[]", "utf8");
}

if (!fs.existsSync(productsFile)) {
    fs.writeFileSync(productsFile, "[]", "utf8");
}

// ======================================
// صفحه اصلی
// ======================================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ======================================
// دریافت محصولات
// ======================================

app.get("/products", (req, res) => {
    try {
        const products = JSON.parse(fs.readFileSync(productsFile, "utf8"));
        res.json(products);
    } catch (err) {
        console.error("Products Error:", err);
        res.status(500).json([]);
    }
});

// ======================================
// ثبت سفارش
// ======================================

app.post("/order", (req, res) => {
    try {
        const order = req.body;
        const orders = JSON.parse(fs.readFileSync(ordersFile, "utf8"));

        order.id = Date.now();
        order.status = "جدید";
        order.createdAt = new Date().toISOString();

        orders.push(order);

        fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2), "utf8");

        console.log("====================================");
        console.log("🛒 سفارش جدید ثبت شد");
        console.log(order);
        console.log("====================================");

        res.json({
            success: true,
            message: "سفارش ثبت شد."
        });
    } catch (err) {
        console.error("Order Error:", err);
        res.status(500).json({
            success: false,
            message: "خطا در ثبت سفارش."
        });
    }
});

// ======================================
// دریافت همه سفارش‌ها
// ======================================

app.get("/orders", (req, res) => {
    try {
        const orders = JSON.parse(fs.readFileSync(ordersFile, "utf8"));
        res.json(orders);
    } catch (err) {
        console.error("Orders Error:", err);
        res.status(500).json([]);
    }
});

// ======================================
// تغییر وضعیت سفارش
// ======================================

app.put("/order/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const { status } = req.body;

        const orders = JSON.parse(fs.readFileSync(ordersFile, "utf8"));
        const order = orders.find((o) => o.id === id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "سفارش پیدا نشد."
            });
        }

        order.status = status;

        fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2), "utf8");

        res.json({ success: true });
    } catch (err) {
        console.error("Update Order Error:", err);
        res.status(500).json({ success: false });
    }
});

// ======================================
// حذف سفارش
// ======================================

app.delete("/order/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        let orders = JSON.parse(fs.readFileSync(ordersFile, "utf8"));

        orders = orders.filter((order) => order.id !== id);

        fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2), "utf8");

        res.json({ success: true });
    } catch (err) {
        console.error("Delete Order Error:", err);
        res.status(500).json({ success: false });
    }
});

// ======================================
// اجرای سرور
// ======================================

app.listen(PORT, () => {
    console.log("======================================");
    console.log("✅ Cafe Fast Food Mohsen");
    console.log(`🌐 http://localhost:${PORT}`);
    console.log("======================================");
});