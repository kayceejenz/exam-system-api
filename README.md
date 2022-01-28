# EXAM SYSTEM ENDPOINTS
## Question category

### Create Question Category [Post api/question-category/create]
#### Header
<div class="highlight highligh-source-shell">
    <pre>Content-type: application/json</pre>
</div>

#### Body
<div class="highlight highligh-source-shell">
    <pre>
        {
            description: String
        }
    </pre>
</div>

### Get All Question Categories [Get api/question-category/]

#### Response
<div class="highlight highligh-source-shell">
    <pre>
        {
            _id: ObjectId
            description: String
        }
    </pre>
</div>

### Update Question Category [Put api/question-category/update/:categoryId]
#### Header
<div class="highlight highligh-source-shell">
    <pre>Content-type: application/json</pre>
</div>

#### Body
<div class="highlight highligh-source-shell">
    <pre>
        {
            description: String
        }
    </pre>
</div>

### Delete Question Category [Delete api/question-category/delete/:categoryId]

#### Response
<div class="highlight highligh-source-shell">
    <pre>
        {
            message: "Deleted",
            success: true
        }
    </pre>
</div>