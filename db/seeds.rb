# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ActiveRecord::Base.transaction do
    # Comment.destroy_all
    # Like.destroy_all
    # Post.destroy_all
    User.destroy_all

    ActiveRecord::Base.connection.reset_pk_sequence!('users')
    # ActiveRecord::Base.connection.reset_pk_sequence!('post')
    # ActiveRecord::Base.connection.reset_pk_sequence!('like')
    # ActiveRecord::Base.connection.reset_pk_sequence!('comment')
    user1 = User.create!( 
        id: 1,
        username: "ella_123",
        password: '444888',
        email: 'ell@gmail.com',
        name: "Ella",
        bio: "bla bla"
    )

    user1 = User.create!( 
        id: 3,
        username: "demouser",
        password: 'demopassword',
        email: 'demo@gmail.com',
        name: "demo",
        bio: "demo"
    )
end