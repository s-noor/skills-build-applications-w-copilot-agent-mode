"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// MongoDB Connection
mongoose_1.default.connect(MONGODB_URI)
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error.message);
});
// Basic route
app.get('/health', (_req, res) => {
    res.json({ status: 'OK', message: 'OctoFit Tracker Backend is running' });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map