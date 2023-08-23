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
        bio: "demo"
    )

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
        bio: ""
    )

    user6 = User.create!( 
        username: "dreamy_1",
        password: '444888',
        email: 'dreamy@gmail.com',
        name: "Ella",
        bio: "bla bla"
    )

    user7 = User.create!( 
        username: "views_321",
        password: '444888',
        email: 'views@gmail.com',
        name: "Helen",
        bio: "bla bla"
    )

#posts
    post1= Post.create!(
        caption: "bla",
        author_id: user2.id
    )
    post1.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/305270029_1099356120974169_2533395504184081514_n.jpeg"),filename: "305270029_1099356120974169_2533395504184081514_n.jpeg")

    post2= Post.create!(
        caption: "",
        author_id: user3.id
    )
    post2.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/selam.jpeg"),filename: "selam.jpeg")


    post3= Post.create!(
        caption: "bla",
        author_id: user3.id
    )
    post3.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s1.jpeg"),filename: "s1.jpeg")

    post4= Post.create!(
        caption: "bla",
        author_id: user3.id
    )
    post4.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s2.jpeg"),filename: "s2.jpeg")

    post5= Post.create!(
        caption: "bla",
        author_id: user3.id
    )
    post5.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s3.jpeg"),filename: "s3.jpeg")

    post6= Post.create!(
        caption: "bla",
        author_id: user3.id
    )
    post6.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s4.jpeg"),filename: "s4.jpeg")

    post7= Post.create!(
        caption: "bla",
        author_id: user3.id
    )
    post7.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/s5.jpeg"),filename: "s5.jpeg")

    post8= Post.create!(
        caption: "bla",
        author_id: user4.id
    )
    post8.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/linu.jpeg"),filename: "linu.jpeg")

    post9= Post.create!(
        caption: "bla",
        author_id: user4.id
    )
    post9.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/linu2.jpeg"),filename: "linu2.jpeg")

    post10= Post.create!(
        caption: "bla",
        author_id: user4.id
    )
    post10.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/linu3.jpeg"),filename: "linu3.jpeg")

    post11= Post.create!(
        caption: "bla",
        author_id: user5.id
    )
    post11.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/d.jpeg"),filename: "d.jpeg")

    post12= Post.create!(
        caption: "bla",
        author_id: user5.id
    )
    post12.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/d2.jpeg"),filename: "d2.jpeg")

    post13= Post.create!(
        caption: "bla",
        author_id: user6.id
    )
    post13.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/mood1.jpeg"),filename: "mood1.jpeg")

    post14= Post.create!(
        caption: "bla",
        author_id: user6.id
    )
    post14.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/mood2.jpeg"),filename: "mood2.jpeg")

    post15= Post.create!(
        caption: "bla",
        author_id: user6.id
    )
    post15.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/m3.jpg"),filename: "m3.jpg")

    post16= Post.create!(
        caption: "bla",
        author_id: user6.id
    )
    post16.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/m4.jpeg"),filename: "m4.jpeg")

    post17= Post.create!(
        caption: "bla",
        author_id: user6.id
    )
    post17.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/m6.jpg"),filename: "m6.jpg")

    post18= Post.create!(
        caption: "bla",
        author_id: user6.id
    )
    post18.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/m7.jpeg"),filename: "m7.jpeg")

    post19= Post.create!(
        caption: "bla",
        author_id: user7.id
    )
    post19.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/views1.jpeg"),filename: "views1.jpeg")

    post20= Post.create!(
        caption: "bla",
        author_id: user7.id
    )
    post20.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/views2.jpeg"),filename: "views2.jpeg")

    post21= Post.create!(
        caption: "bla",
        author_id: user7.id
    )
    post21.photo.attach(io: URI.open("https://insta-hosting.s3.us-west-2.amazonaws.com/views3.jpeg"),filename: "views3.jpeg")


    post22= Post.create!(
        caption: "bla",
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

    # comment
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