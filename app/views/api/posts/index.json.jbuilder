@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :caption, :author_id, :created_at
    end
end