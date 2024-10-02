export default function Home() {
  return (
    <div>
    <header class="bg-green-600 text-white py-4">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold">Brown University Outing Club</h1>
            <p class="mt-2 text-lg">Explore the outdoors, make friends, and create lasting memories!</p>
        </div>
    </header>

    <div class="h-full p-9 container mx-auto py-10">
        <section class="mb-8">
            <h2 class="text-3xl font-semibold mb-4">Upcoming Activities</h2>
            <ul class="list-disc list-inside">
                <li class="mb-2">Hiking Trip to the Appalachian Trail - October 15</li>
                <li class="mb-2">Camping Weekend at Arcadia - October 22-23</li>
                <li class="mb-2">Kayaking at the Narrow River - October 30</li>
                <li class="mb-2">Weekly Group Runs - Every Wednesday at 5 PM</li>
            </ul>
        </section>

        <section>
            <h2 class="text-3xl font-semibold mb-4">Join Us!</h2>
            <p class="mb-4">Whether you're an experienced outdoor enthusiast or a beginner looking to try something new, the Brown University Outing Club welcomes you!</p>
            <a href="/get-involved" class="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Sign Up Today!</a>
        </section>
    </div>

    <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 Brown University Outing Club. All rights reserved.</p>
            <p><a href="#" class="text-green-400 hover:underline">Contact Us</a> | <a href="#" class="text-green-400 hover:underline">Privacy Policy</a></p>
        </div>
    </footer>
    </div>
  );
}
