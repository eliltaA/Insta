# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
require "open-uri"
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

    Comment.destroy_all
    Like.destroy_all
    Post.destroy_all
    User.destroy_all

    ActiveRecord::Base.connection.reset_pk_sequence!('users')
    ActiveRecord::Base.connection.reset_pk_sequence!('post')
    ActiveRecord::Base.connection.reset_pk_sequence!('like')
    ActiveRecord::Base.connection.reset_pk_sequence!('comment')
    user1 = User.create!( 
        username: "ella_123",
        password: '444888',
        email: 'ell@gmail.com',
        name: "Ella",
        bio: "bla bla"
    )

    user2 = User.create!( 
        username: "demouser",
        password: 'demopassword',
        email: 'demo@gmail.com',
        name: "demo",
        bio: "demouser's profile"
    )
    # user2.profile_picture.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/mood1.jpeg"),filename: "mood1.jpeg")

    user3 = User.create!( 
        username: "selam",
        password: '444888',
        email: 'selam@gmail.com',
        name: "selam",
        bio: "actress🦋"
        # Onset 🎞️ Cooking something 😉
        # I chose peace ✌🏾
        # Never easy but always worth it 😊
    )
    user3.profile_picture.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s1.jpeg"),filename: "s1.jpeg")


    user4 = User.create!( 
        username: "linlouu",
        password: '444888',
        email: 'linu@gmail.com',
        name: "Louisa",
        bio: "Happy Girl 🎀💖✨"
        # a wonderfully realistic report on my past weeks📚
    )

    user5 = User.create!( 
        username: "dina",
        password: '444888',
        email: 'dina@gmail.com',
        name: "dinu",
        bio: "hey there!!🧚🏼‍♀️"
    )

    user6 = User.create!( 
        username: "dreamy_1",
        password: '444888',
        email: 'dreamy@gmail.com',
        name: "Ella",
        bio: "Beautiful places💫"
    )

    user7 = User.create!( 
        username: "views_321",
        password: '444888',
        email: 'views@gmail.com',
        name: "Helen",
        bio: "views & vibes✨"
    )

    user8 = User.create!( 
    username: "user8",
    password: 'password',
    email: 'user8@gmail.com',
    name: "User Eight",
    bio: "This is User Eight's profile."
)

user9 = User.create!( 
    username: "user9",
    password: 'password',
    email: 'user9@gmail.com',
    name: "User Nine",
    bio: "This is User Nine's profile."
)

user10 = User.create!( 
    username: "user10",
    password: 'password',
    email: 'user10@gmail.com',
    name: "User Ten",
    bio: "This is User Ten's profile."
)
#posts
post1= Post.create!(
    caption: "Exploring beautiful landscapes. 🏞️ Nature Travel",
    author_id: user2.id
)
post1.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/305270029_1099356120974169_2533395504184081514_n.jpeg"),filename: "305270029_1099356120974169_2533395504184081514_n.jpeg")

post2= Post.create!(
    caption: "Enjoying a peaceful day by the lake. 🌅 Nature Peace",
    author_id: user3.id
)
post2.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/selam.jpeg"),filename: "selam.jpeg")

post3= Post.create!(
    caption: "Captured this stunning view today. 😍 ScenicBeauty",
    author_id: user3.id
)
post3.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s1.jpeg"),filename: "s1.jpeg")

post4= Post.create!(
    caption: "Exploring hidden trails in the forest. 🌲 Adventure",
    author_id: user3.id
)
post4.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s2.jpeg"),filename: "s2.jpeg")

post5= Post.create!(
    caption: "Chasing waterfalls. 💧 Nature Adventure",
    author_id: user3.id
)
post5.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s3.jpeg"),filename: "s3.jpeg")

post6= Post.create!(
    caption: "Spectacular sunset views. 🌇 SunsetLover",
    author_id: user3.id
)
post6.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s4.jpeg"),filename: "s4.jpeg")

post7= Post.create!(
    caption: "Relaxing by the beach. 🏖️ BeachDays",
    author_id: user3.id
)
post7.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s5.jpeg"),filename: "s5.jpeg")

post8= Post.create!(
    caption: "Weekend vibes with friends. 🎉 WeekendFun",
    author_id: user4.id
)
post8.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/linu.jpeg"),filename: "linu.jpeg")

post9= Post.create!(
    caption: "Exploring the city streets. 🏙️ CityLife",
    author_id: user4.id
)
post9.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/linu2.jpeg"),filename: "linu2.jpeg")


post10= Post.create!(
    caption: "Savoring delicious street food. 🍔 Foodie",
    author_id: user4.id
)
post10.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/linu3.jpeg"),filename: "linu3.jpeg")

post11= Post.create!(
    caption: "Admiring the view from the mountaintop. ⛰️ Adventure",
    author_id: user5.id
)
post11.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/d.jpeg"),filename: "d.jpeg")

post12= Post.create!(
    caption: "Spending quality time in nature. 🌳 NatureLover",
    author_id: user5.id
)
post12.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/d2.jpeg"),filename: "d2.jpeg")

post13= Post.create!(
    caption: "Mood: Peaceful. 🌟 InnerPeace",
    author_id: user6.id
)
post13.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/mood1.jpeg"),filename: "mood1.jpeg")

post14= Post.create!(
    caption: "Chasing dreams and sunsets. 🌅 DreamBig",
    author_id: user6.id
)
post14.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/mood2.jpeg"),filename: "mood2.jpeg")

post15= Post.create!(
    caption: "Exploring new horizons. 🌄 AdventureAwaits",
    author_id: user6.id
)
post15.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/m3.jpg"),filename: "m3.jpg")

post16= Post.create!(
    caption: "Lost in the beauty of the forest. 🌲 NatureEscape",
    author_id: user6.id
)
post16.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/m4.jpeg"),filename: "m4.jpeg")

post17= Post.create!(
    caption: "Embracing the serenity of the mountains. ⛰️ MountainMagic",
    author_id: user6.id
)
post17.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/m6.jpg"),filename: "m6.jpg")

post18= Post.create!(
    caption: "Sunsets and palm trees. 🌴🌅 IslandLife",
    author_id: user6.id
)
post18.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/m7.jpeg"),filename: "m7.jpeg")

post19= Post.create!(
    caption: "Breathtaking city views. 🏙️ Cityscape",
    author_id: user7.id
)
post19.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/views1.jpeg"),filename: "views1.jpeg")

post20= Post.create!(
    caption: "Exploring urban jungles. 🏢 CityLife",
    author_id: user7.id
)
post20.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/views2.jpeg"),filename: "views2.jpeg")

post21= Post.create!(
    caption: "Wanderlust and city lights. 🌃 CityNights",
    author_id: user7.id
)
post21.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/views3.jpeg"),filename: "views3.jpeg")


    post22= Post.create!(
        caption: "Captured a magical moment. ✨ MagicalMoments",
        author_id: user7.id
    )
    post22.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/views4.jpeg"),filename: "views4.jpeg")

    post23= Post.create!(
        caption: "bla",
        author_id: user7.id
    )
    post23.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/views5.jpeg"),filename: "views5.jpeg")

    post24= Post.create!(
        caption: "bla",
        author_id: user7.id
    )
    post24.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/v6.jpeg"),filename: "v6.jpeg")

    post25= Post.create!(
        caption: "bla",
        author_id: user7.id
    )
    post25.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/v7.jpg"),filename: "v7.jpg")

    post26= Post.create!(
        caption: "bla",
        author_id: user7.id
    )
    post26.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/v8.jpg"),filename: "v8.jpg")

    post27= Post.create!(
        caption: "bla",
        author_id: user7.id
    )
    post27.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/v9.jpg"),filename: "v9.jpg")

    post28= Post.create!(
        caption: "bla",
        author_id: user7.id
    )
    post28.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/v10.jpeg"),filename: "v10.jpeg")

    #comment
    comment1 = Comment.create!(
        comment_body: 'lovely',
        author_id: user4.id,
        post_id: post8.id
    )

    comment2 = Comment.create!(
        comment_body: 'beautifull view!!',
        author_id: user2.id,
        post_id: post1.id
    )

    comment3 = Comment.create!(
        comment_body: 'pretty!!',
        author_id: user3.id,
        post_id: post2.id
    )

    comment4 = Comment.create!(
        comment_body: 'mesmerizing!',
        author_id: user7.id,
        post_id: post21.id
    )

    # Additional comments
comment5 = Comment.create!(
    comment_body: 'Wow, amazing!',
    author_id: user6.id,
    post_id: post13.id
)

comment6 = Comment.create!(
    comment_body: 'Love this picture!',
    author_id: user5.id,
    post_id: post11.id
)

comment7 = Comment.create!(
    comment_body: 'Gorgeous view!',
    author_id: user4.id,
    post_id: post9.id
)

comment8 = Comment.create!(
    comment_body: 'Beautiful shot!',
    author_id: user3.id,
    post_id: post7.id
)

comment9 = Comment.create!(
    comment_body: 'Stunning!🌸',
    author_id: user2.id,
    post_id: post5.id
)

comment10 = Comment.create!(
    comment_body: 'Incredible!',
    author_id: user7.id,
    post_id: post28.id
)

comment11 = Comment.create!(
    comment_body: 'Lovely pic!',
    author_id: user6.id,
    post_id: post17.id
)

comment12 = Comment.create!(
    comment_body: 'So dreamy!',
    author_id: user5.id,
    post_id: post15.id
)

    #likes

like1 = Like.create!(
    user_id: user4.id,
    # username: "linlouu",
    likeable_type: 'Post',
    likeable_id: post1.id
)

like2 = Like.create!(
    user_id: user2.id,
    # username: "demouser",
    likeable_type: 'Post',
    likeable_id: post2.id
)

like3 = Like.create!(
    user_id: user3.id,
    # username: "selam",
    likeable_type: 'Post',
    likeable_id: post3.id
)

like4 = Like.create!(
    user_id: user2.id,
    # username: "demouser",
    likeable_type: 'Post',
    likeable_id: post1.id
)

like5 = Like.create!(
    user_id: user2.id,
    # username: "demouser",
    likeable_type: 'Comment',
    likeable_id: comment1.id
)

like6 = Like.create!(
    user_id: user3.id,
    # username: "selam",
    likeable_type: 'Comment',
    likeable_id: comment3.id
)

like7 = Like.create!(
    user_id: user5.id,
    likeable_type: 'Post',
    likeable_id: post4.id
)

like8 = Like.create!(
    user_id: user6.id,
    likeable_type: 'Post',
    likeable_id: post5.id
)

like9 = Like.create!(
    user_id: user7.id,
    likeable_type: 'Post',
    likeable_id: post6.id
)

like10 = Like.create!(
    user_id: user8.id,
    likeable_type: 'Post',
    likeable_id: post7.id
)

like11 = Like.create!(
    user_id: user9.id,
    likeable_type: 'Comment',
    likeable_id: comment4.id
)

like12 = Like.create!(
    user_id: user10.id,
    likeable_type: 'Comment',
    likeable_id: comment5.id
)


#follows
follow1 = Following.create!(
    followee_id: user3.id,
    follower_id: user6.id
)

follow2 = Following.create!(
    followee_id: user1.id,  # User 1 follows User 3
    follower_id: user3.id
)

follow3 = Following.create!(
    followee_id: user1.id,  # User 1 follows User 4
    follower_id: user4.id
)

follow4 = Following.create!(
    followee_id: user2.id,  # User 2 follows User 1
    follower_id: user1.id
)

follow5 = Following.create!(
    followee_id: user2.id,  # User 2 follows User 3
    follower_id: user3.id
)

follow6 = Following.create!(
    followee_id: user3.id,  # User 3 follows User 2
    follower_id: user2.id
)

follow7 = Following.create!(
    followee_id: user5.id,  # User 5 follows User 6
    follower_id: user6.id
)

follow8 = Following.create!(
    followee_id: user5.id,  # User 5 follows User 7
    follower_id: user7.id
)

follow9 = Following.create!(
    followee_id: user6.id,  # User 6 follows User 5
    follower_id: user5.id
)

follow10 = Following.create!(
    followee_id: user8.id,  # User 8 follows User 7
    follower_id: user7.id
)

follow11 = Following.create!(
    followee_id: user8.id,  # User 8 follows User 6
    follower_id: user6.id
)

follow12 = Following.create!(
    followee_id: user9.id,  # User 9 follows User 1
    follower_id: user1.id
)

follow13 = Following.create!(
    followee_id: user9.id,  # User 9 follows User 2
    follower_id: user2.id
)

follow14 = Following.create!(
    followee_id: user10.id,  # User 10 follows User 1
    follower_id: user1.id
)

follow15 = Following.create!(
    followee_id: user10.id,  # User 10 follows User 2
    follower_id: user2.id
)






