export const CardData = [
    {
        id: 1,
        title: "Electronics",
        imgLink: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
        details: ["Repairing", "Servicing", "Installation"],
        // options: ["Refrigerator", "Fan", "Geyser", "Television"],
        options: [
            {
                item: "Refrigerator",
                services: [
                    {
                        name: "Installation",
                        price: 500
                    },
                    {
                        name: "Uninstallation",
                        price: 300
                    },
                    {
                        name: "Repairing",
                        price: 200
                    },
                ]
            },
            {
                item: "Air Conditioner",
                services: [
                    {
                        name: "Installation",
                        price: 500
                    },
                    {
                        name: "Uninstallation",
                        price: 300
                    },
                    {
                        name: "Repairing",
                        price: 200
                    },
                ]
            },
            {
                item: "Fan",
                services: [
                    {
                        name: "Installation",
                        price: 500
                    },
                    {
                        name: "Uninstallation",
                        price: 300
                    },
                    {
                        name: "Repairing",
                        price: 200
                    },
                ]
            },
            {
                item: "LED-LCD TV",
                services: [
                    {
                        name: "Installation",
                        price: 500
                    },
                    {
                        name: "Uninstallation",
                        price: 300
                    },
                    {
                        name: "Repairing",
                        price: 200
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Plumbing",
        imgLink: "https://source.unsplash.com/random",
        details: ["Repairing", "Servicing", "Installation"],
        options: ["Refrigerator", "Fan", "Geyser", "Television"]
    },
    {
        id: 3,
        title: "Home Cleaning",
        imgLink: "https://source.unsplash.com/random",
        details: ["Repairing", "Servicing", "Installation"],
        options: ["Refrigerator", "Fan", "Geyser", "Television"]
    },
    {
        id: 4,
        title: "Security",
        imgLink: "./vault.jpg",
        details: ["Repairing", "Servicing", "Installation"],
        options: ["Refrigerator", "Fan", "Geyser", "Television"]
    }
]
