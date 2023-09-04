@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :comment_body, :author_id, :post_id, :created_at
        # json.post comment.post
    end
end

