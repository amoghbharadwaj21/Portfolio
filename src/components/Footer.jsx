import React from 'react'

function Footer() {

    let currentDateTime = new Date();
    let currentYear = currentDateTime.getFullYear();

    return (
        <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div class="mx-auto max-w-screen-xl text-center">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="#" class="hover:underline">Amogh</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
