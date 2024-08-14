import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div className='container !px-0'>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Echo</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        The ultimate review system where your voice matters. Share your thoughts, read trusted reviews, and make informed decisions.
                    </p>
                    {/* <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="inline-block px-6 py-3 bg-green-500 text-white rounded-md text-lg font-medium hover:bg-green-600 transition duration-300"
          >
            Register
          </Link>
        </div> */}
                </div>

                <div className="bg-white border rounded-lg p-8 mb-8 w-full max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Why Choose Echo?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start bg-blue-100 p-6 rounded-lg shadow-md">
                            <div className="text-blue-500 mr-4">
                                <i className="fas fa-star fa-2x"></i> {/* Font Awesome icon */}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Authentic Reviews</h3>
                                <p className="text-gray-600">Real feedback from real users to help you make better decisions.</p>
                            </div>
                        </div>
                        <div className="flex items-start bg-blue-100 p-6 rounded-lg shadow-md">
                            <div className="text-blue-500 mr-4">
                                <i className="fas fa-mobile-alt fa-2x"></i> {/* Font Awesome icon */}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy to Use</h3>
                                <p className="text-gray-600">Simple and intuitive interface for seamless review submissions.</p>
                            </div>
                        </div>
                        <div className="flex items-start bg-blue-100 p-6 rounded-lg shadow-md">
                            <div className="text-blue-500 mr-4">
                                <i className="fas fa-lock fa-2x"></i> {/* Font Awesome icon */}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure</h3>
                                <p className="text-gray-600">Your data is protected with top-notch security measures.</p>
                            </div>
                        </div>
                        <div className="flex items-start bg-blue-100 p-6 rounded-lg shadow-md">
                            <div className="text-blue-500 mr-4">
                                <i className="fas fa-users fa-2x"></i> {/* Font Awesome icon */}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Driven</h3>
                                <p className="text-gray-600">Join a growing community of users who value honest feedback.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 mb-8 w-full max-w-4xl mx-auto rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">What Our Users Say</h2>
                    <div className="flex flex-wrap gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                            <p className="text-lg text-gray-600 mb-4">"Echo has transformed the way we get feedback from our customers. It's simple and incredibly effective!"</p>
                            <p className="font-semibold text-gray-800">Jane Doe</p>
                            <p className="text-gray-500">CEO, ExampleCorp</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                            <p className="text-lg text-gray-600 mb-4">"The review system is intuitive and reliable. We’ve seen a noticeable improvement in our customer insights."</p>
                            <p className="font-semibold text-gray-800">John Smith</p>
                            <p className="text-gray-500">Product Manager, TechCo</p>
                        </div>
                    </div>
                </div>


                <div className="bg-white border rounded-lg p-8 w-full max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Trusted by Thousands</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg p-6 shadow-lg">
                            <div className="text-5xl font-bold mb-2">
                                <i className="fas fa-users"></i> {/* Font Awesome icon */}
                                25,000+
                            </div>
                            <p className="text-lg font-medium">Happy Users</p>
                        </div>
                        <div className="flex flex-col items-center bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg p-6 shadow-lg">
                            <div className="text-5xl font-bold mb-2">
                                <i className="fas fa-building"></i> {/* Font Awesome icon */}
                                100+
                            </div>
                            <p className="text-lg font-medium">Trusted Organizations</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white mt-4 p-8 mb-8 w-full max-w-4xl mx-auto rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Features at a Glance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md">
                            <div className="text-blue-500 mr-4">
                                <i className="fas fa-thumbs-up fa-3x"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Highly Rated</h3>
                                <p className="text-gray-600">Join a platform that’s consistently rated highly by users.</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-green-50 p-6 rounded-lg shadow-md">
                            <div className="text-green-500 mr-4">
                                <i className="fas fa-cogs fa-3x"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Customizable</h3>
                                <p className="text-gray-600">Tailor the review process to fit your specific needs.</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-yellow-50 p-6 rounded-lg shadow-md">
                            <div className="text-yellow-500 mr-4">
                                <i className="fas fa-rocket fa-3x"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Efficient</h3>
                                <p className="text-gray-600">Experience quick and efficient review processing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border p-8 mb-8 w-full max-w-5xl mx-auto rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Pricing Plans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Basic Plan */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                            <div className="bg-blue-500 text-white p-4 rounded-full inline-block mb-4">
                                <i className="fas fa-star fa-3x"></i> {/* Font Awesome icon */}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">Basic</h3>
                            <p className="text-2xl font-semibold text-gray-600 mb-4">$0 <span className="text-gray-400">/ month</span></p>
                            <p className="text-gray-700 mb-6">Essential features for personal use.</p>
                            <Link to="/register" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">Sign Up</Link>
                        </div>
                        {/* Pro Plan */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                            <div className="bg-green-500 text-white p-4 rounded-full inline-block mb-4">
                                <i className="fas fa-cogs fa-3x"></i> {/* Font Awesome icon */}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">Pro</h3>
                            <p className="text-2xl font-semibold text-gray-600 mb-4">$29 <span className="text-gray-400">/ month</span></p>
                            <p className="text-gray-700 mb-6">Advanced features for professionals.</p>
                            <Link to="/register" className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">Sign Up</Link>
                        </div>
                        {/* Enterprise Plan */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                            <div className="bg-yellow-500 text-white p-4 rounded-full inline-block mb-4">
                                <i className="fas fa-briefcase fa-3x"></i> {/* Font Awesome icon */}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">Enterprise</h3>
                            <p className="text-2xl font-semibold text-gray-600 mb-4">Custom Pricing</p>
                            <p className="text-gray-700 mb-6">Tailored solutions for large organizations.</p>
                            <Link to="/contact" className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300">Contact Us</Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default WelcomePage