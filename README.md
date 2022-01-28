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



### Create Questions [Post api/question/create]
#### Header
<div class="highlight highligh-source-shell">
    <pre>Content-type: application/json</pre>
</div>

#### Body
<div class="highlight highligh-source-shell">
    <pre>
        [{
            category: ObjectId,
            type: ["SINGLE CHOICE", "MULTI CHOICE", "FILL IN THE GAPS"],
            instruction: String,
            text: String,
            options: [String],
            answer: [String]
        }]
    </pre>
</div>

### Get All Questions [Get api/question/]

#### Response
<div class="highlight highligh-source-shell">
    <pre>
        {
            _id: ObjectId,
            category: {
                _id: ObjectId
                description: String
            },
            type: String,
            instruction: String,
            text: String,
            options: [String],
            answer: [String]
        }
    </pre>
</div>

### Update Question [Put api/question/update/:questionId]
#### Header
<div class="highlight highligh-source-shell">
    <pre>Content-type: application/json</pre>
</div>

#### Body
<div class="highlight highligh-source-shell">
    <pre>
        {
            category: ObjectId,
            type: ["SINGLE CHOICE", "MULTI CHOICE", "FILL IN THE GAPS"],
            instruction: String,
            text: String,
            options: [String],
            answer: [String]
        }
    </pre>
</div>

### Delete Question [Delete api/question/delete/:questionId]

#### Response
<div class="highlight highligh-source-shell">
    <pre>
        {
            message: "Deleted",
            success: true
        }
    </pre>
</div>


### Create User [Post api/users/]
#### Header
<div class="highlight highligh-source-shell">
    <pre>Content-type: application/json</pre>
</div>

#### Body
<div class="highlight highligh-source-shell">
    <pre>
        {
            name: String,
            email: String,
            password: String,
            role: ["user","admin"],
        }
    </pre>
</div>

### Get All Users [Get api/users/]

#### Response
<div class="highlight highligh-source-shell">
    <pre>
        {
            _id: ObjectId,
            name: String,
            email: String,
            password: String,
            role: String,
            isActive: Boolean,
            isVerified: Boolean
        }
    </pre>
</div>

### Create Assessment [Post api/assessment/create]
#### Header
<div class="highlight highligh-source-shell">
    <pre>Content-type: application/json</pre>
</div>

#### Body
<div class="highlight highligh-source-shell">
    <pre>
        {
            title: String,
            description: String,
            duration: Number,
            numberOfQuestion: Number,
            totalMark: Number,
            dateTime: Date,
            questionBank: [ObjectId]          
        }
    </pre>
</div>

### Get All Assessments [Get api/assessment/]

#### Response
<div class="highlight highligh-source-shell">
    <pre>
        {
            _id: ObjectId,
            title: String,
            description: String,
            duration: Number,
            numberOfQuestion: Number,
            totalMark: Number,
            markPerQuestion: Number,
            dateTime: Date,
            questionBank: [{
                _id: ObjectId,
                description: String
            }]     
        }
    </pre>
</div>

### Update Assessment [Put api/assessment/update/:assessmentId]
#### Header
<div class="highlight highligh-source-shell">
    <pre>Content-type: application/json</pre>
</div>

#### Body
<div class="highlight highligh-source-shell">
    <pre>
        {
            title: String,
            description: String,
            duration: Number,
            numberOfQuestion: Number,
            totalMark: Number,
            dateTime: Date,
            questionBank: [ObjectId]          
        }
    </pre>
</div>

### Delete Assessment [Delete api/assessment/delete/:assessmentId]

#### Response
<div class="highlight highligh-source-shell">
    <pre>
        {
            message: "Deleted",
            success: true
        }
    </pre>
</div>


### Prepare Assessments  For User [Get api/assessment/prepare/:userId/:assessmentId]

#### Response
<div class="highlight highligh-source-shell">
    <pre>
        {
            _id: ObjectId,
            user: {
                 _id: ObjectId,
                name: String,
                email: String,
                password: String,
                role: String,
                isActive: Boolean,
                isVerified: Boolean
            },
            assessment: {
                _id: ObjectId,
                title: String,
                description: String,
                duration: Number,
                numberOfQuestion: Number,
                totalMark: Number,
                markPerQuestion: Number,
                dateTime: Date,
                questionBank: [{
                    _id: ObjectId,
                    description: String
                }]     
            },
            mark: Number,
            assessmentScript: [{
                question: {
                    _id: ObjectId,
                    category: {
                        _id: ObjectId,
                        description: String
                    },
                    type: String,
                    instruction: String,
                    text: String,
                    options: [String],
                    answer: [String]
                },
                choice: [String],
                isCorrect: Boolean,
                markGotten: Number
            }]
        }
    </pre>
</div>


### Submit Assessments For User [Post api/assessment/submit/:userId/:assessmentId]
#### Header
<div class="highlight highligh-source-shell">
    <pre>Content-type: application/json</pre>
</div>

#### Body
<div class="highlight highligh-source-shell">
    <pre>
            [{
                question: {
                    _id: ObjectId,
                    category: {
                        _id: ObjectId,
                        description: String
                    },
                    type: String,
                    instruction: String,
                    text: String,
                    options: [String],
                    answer: [String]
                },
                choice: [String],
            }]
    </pre>
</div>

#### Response
<div class="highlight highligh-source-shell">
    <pre>
        {
            _id: ObjectId,
            user: {
                 _id: ObjectId,
                name: String,
                email: String,
                password: String,
                role: String,
                isActive: Boolean,
                isVerified: Boolean
            },
            assessment: {
                _id: ObjectId,
                title: String,
                description: String,
                duration: Number,
                numberOfQuestion: Number,
                totalMark: Number,
                markPerQuestion: Number,
                dateTime: Date,
                questionBank: [{
                    _id: ObjectId,
                    description: String
                }]     
            },
            mark: Number,
            assessmentScript: [{
                question: {
                    _id: ObjectId,
                    category: {
                        _id: ObjectId,
                        description: String
                    },
                    type: String,
                    instruction: String,
                    text: String,
                    options: [String],
                    answer: [String]
                },
                choice: [String],
                isCorrect: Boolean,
                markGotten: Number
            }]
        }
    </pre>
</div>
