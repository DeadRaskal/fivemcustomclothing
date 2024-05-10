<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cool Website with Comments</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to Cool Website</h1>
    </header>
    
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
    
    <section>
        <h2>About Us</h2>
        <p>This is a cool website. We do cool things.</p>
        
        <h2>Comments</h2>
        <div id="comments"></div>
        
        <h3>Add a Comment</h3>
        <textarea id="commentInput" rows="4" cols="50"></textarea>
        <br>
        <button onclick="addComment()">Add Comment</button>
    </section>
    
    <footer>
        <p>&copy; 2024 Cool Website. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
