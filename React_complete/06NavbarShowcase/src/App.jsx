import './App.css'
import Navbar from './components/Navbar'

function App() {
    return (
        <>
            <Navbar />
            <main className='min-h-screen bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                    <section className='mb-12'>
                        <h1 className='text-4xl font-bold text-gray-900 mb-4'>Beautiful Navigation Bar</h1>
                        <p className='text-lg text-gray-600 mb-8'>
                            This is a showcase of a modern, responsive navigation bar built with Tailwind CSS and React.
                        </p>
                    </section>

                    <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
                            <h2 className='text-2xl font-bold text-blue-600 mb-2'>📱 Responsive</h2>
                            <p className='text-gray-700'>
                                The navbar adapts perfectly to all screen sizes with a mobile-friendly hamburger menu.
                            </p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
                            <h2 className='text-2xl font-bold text-purple-600 mb-2'>✨ Modern Design</h2>
                            <p className='text-gray-700'>
                                Built with modern Tailwind CSS utilities for a clean, professional appearance.
                            </p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
                            <h2 className='text-2xl font-bold text-pink-600 mb-2'>🎨 Customizable</h2>
                            <p className='text-gray-700'>
                                Easily customize colors, links, and styling to match your brand.
                            </p>
                        </div>
                    </section>

                    <section className='mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white'>
                        <h2 className='text-3xl font-bold mb-4'>Features</h2>
                        <ul className='space-y-2'>
                            <li className='flex items-center'>
                                <span className='mr-3'>✓</span> Smooth hover animations
                            </li>
                            <li className='flex items-center'>
                                <span className='mr-3'>✓</span> Mobile responsive design
                            </li>
                            <li className='flex items-center'>
                                <span className='mr-3'>✓</span> Gradient background
                            </li>
                            <li className='flex items-center'>
                                <span className='mr-3'>✓</span> Icon integration with Lucide React
                            </li>
                            <li className='flex items-center'>
                                <span className='mr-3'>✓</span> CTA (Sign In) button
                            </li>
                        </ul>
                    </section>
                </div>
            </main>

            <footer className='bg-gray-900 text-white py-8 mt-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <p>&copy; 2026 Beautiful Navbar Showcase. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default App
