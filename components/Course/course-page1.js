class CoursePage1 extends HTMLElement{
    constructor(){
        super();


        this.attachShadow({mode:'open'});
 }

        connectedCallback() {
             this.render();
             this.loadProfileFromJson();
        }


        render() {

            this.shadowRoot.innerHTML = /*html*/`

            <style>
            * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            }
            body {
            background-color: #f9f9f9;
            color: #333;
            padding: 20px;
            }
            a {
            color: #4a90e2;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 10px;
            }
            .container {
            max-width: 900px;
            margin: auto;
            }
            .banner {
            background: url('https://img.freepik.com/free-photo/close-up-gaming-equipment-neon-light_23-2149548393.jpg') no-repeat center/cover;
            height: 200px;
            border-radius: 10px;
            position: relative;
            color: white;
            padding: 20px;
            }
            .banner h1 {
            margin-top: 50px;
            font-size: 2rem;
            }
            .banner p {
            margin-top: 10px;
            font-size: 1rem;
            }
            .instructor {
            display: flex;
            align-items: center;
            margin-top: 20px;
            }
            .instructor img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
            }
            .grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
            margin-top: 20px;
            }
            .card, .price-box {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .price-box {
            text-align: center;
            }
            .price-box h2 {
            font-size: 2rem;
            color: #1a73e8;
            margin-bottom: 10px;
            }
            .price-box ul {
            list-style: none;
            margin-bottom: 20px;
            }
            .price-box ul li {
            margin-bottom: 10px;
            }
            .price-box button {
            background-color: #1a73e8;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            }
            h3 {
            margin-bottom: 10px;
            }
            ul.lessons {
            list-style: none;
            }
            ul.lessons li {
            border-top: 1px solid #eee;
            padding: 10px 0;
            }
            ul.lessons li:first-child {
            border-top: none;
            }
            .module {
            margin-bottom: 15px;
            }
            .module a {
            color: #1a73e8;
            font-weight: 600;
            }
            </style>

                <div class="container">
                <a href="#">&larr; Back to Courses</a>

                <div class="banner">
                <h1>Unity Game Development</h1>
                <p><strong>12 weeks</strong> &middot; Intermediate &middot; 250+ enrolled</p>
                </div>

                <div class="instructor">
                <img src="https://via.placeholder.com/40" alt="Instructor" />
                <span><strong>Course Instructor:</strong id="instructor"> Dr. John Smith</span>
                </div>

                <div class="grid">
                <div>
                    <div class="card">
                    <h3>Course Overview</h3>
                    <p>Create immersive 3D games with Unity. Learn C# programming, game physics, and professional game development workflows.</p>
                    </div>

                    <div class="card" style="margin-top: 20px;">
                    <h3>Prerequisites</h3>
                    <p>Basic programming knowledge in any language.<br/>Understanding of 3D geometry is helpful but not required.</p>
                    </div>

                    <div class="card" style="margin-top: 20px;">
                    <h3>What You'll Learn</h3>
                    <ul class="lessons">
                        <li>Build complete 3D games</li>
                        <li>Master C# programming</li>
                        <li>Implement game physics</li>
                        <li>Create engaging UI systems</li>
                        <li>Optimize game performance</li>
                    </ul>
                    </div>

                    <div class="card" style="margin-top: 20px;">
                    <h3>Course Structure</h3>
                    <div class="module"><a href="#">Module 1</a>: Introduction to the Course</div>
                    <div class="module"><a href="#">Module 2</a>: Fundamentals and Core Concepts</div>
                    <div class="module"><a href="#">Module 3</a>: Advanced Topics</div>
                    <div class="module"><a href="#">Module 4</a>: Project Work</div>
                    </div>
                </div>

                <div class="price-box">
                    <h2>$99.99</h2>
                    <p>One-time payment</p>
                    <ul>
                    <li>Lifetime access</li>
                    <li>Certificate of completion</li>
                    <li>30-day money-back guarantee</li>
                    <li>Direct instructor support</li>
                    </ul>
                    <button>Start Learning</button>
                </div>
                </div>      
                </div>

       

      
            `;}

            
    async loadProfileFromJson() {
        try {
            const response = await fetch('http://localhost:3000/courses');
            const response2 = await fetch('http://localhost:3000/instructor');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }   

            const data = await response.json();
            const data2 = await response2.json();

            const selectCourse = '2'; //aqui va el id del curso pilas

            const course = data.find(c => c.id === selectCourse);
            const teacher = data2.find(t => t.id === course.teacher)

            if(course && teacher){


                const teacherelement = this.shadowRoot.querySelector('#instructor');
                teacherelement.textContent = teacher.name;





            }else{
                console.error("Curso no encontrado")
            }

            

           





            
        } 
        
        catch (error) {
            
        }
    }
}
customElements.define('course-page1',CoursePage1);