const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Facilities data
let facilities = [
    { id: 1, name: "Computer Lab", status: "Good" },
    { id: 2, name: "Library", status: "Needs Inspection" },
    { id: 3, name: "Classroom A", status: "Good" }
];

// Complaints data
let complaints = [
    { id: 1, title: "Fan not working", location: "Classroom A" },
    { id: 2, title: "Water leakage", location: "Library" }
];

// Home route
app.get("/", (req, res) => {
    res.send("Smart Facility Management API is running!");
});

// Get all facilities
app.get("/api/facilities", (req, res) => {
    res.json(facilities);
});

// Add a facility
app.post("/api/facilities", (req, res) => {
    const { name, status } = req.body;

    if (!name || !status) {
        return res.status(400).json({
            message: "Name and status are required"
        });
    }

    const newFacility = {
        id: Date.now(),
        name: name,
        status: status
    };

    facilities.push(newFacility);

    res.status(201).json({
        message: "Facility added successfully",
        facility: newFacility
    });
});

// Get all complaints
app.get("/api/complaints", (req, res) => {
    res.json(complaints);
});

// Add a complaint
app.post("/api/complaints", (req, res) => {
    const { title, location } = req.body;

    if (!title || !location) {
        return res.status(400).json({
            message: "Title and location are required"
        });
    }

    const newComplaint = {
        id: Date.now(),
        title: title,
        location: location
    };

    complaints.push(newComplaint);

    res.status(201).json({
        message: "Complaint added successfully",
        complaint: newComplaint
    });
});

// Server port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log("================================");
    console.log("Smart Facility Management API");
    console.log("Server running on port " + PORT);
    console.log("Open http://localhost:" + PORT);
    console.log("================================");
});