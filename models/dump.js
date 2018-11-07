Friends
        .sync({ force: true })
        .then(function () {
            Friends.bulkCreate([
                {
                    id: "",
                    friend_id: "",
                    name: "Keith",
                    gender: "guy",
                    genre: "drama",
                    location: "Tucson, AZ"
                },
                {
                    id: "",
                    friend_id: "",
                    name: "Berte",
                    gender: "fluid",
                    genre: "action",
                    location: "Detroit, MI"
                },
                {
                    id: "",
                    friend_id: "",
                    name: "Devon",
                    gender: "chik",
                    genre: "romance",
                    location: "San Diego, CA"
                },
                {
                    id: "",
                    friend_id: "",
                    name: "Anna",
                    gender: "lady",
                    genre: "fantasy",
                    location: "Portland, OR"
                },
            ],
            )
        });