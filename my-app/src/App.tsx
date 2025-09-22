import React from 'react';

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="relative mx-auto h-28 w-28 -translate-y-16 transform rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-1 shadow-lg">
          <img
            className="h-full w-full rounded-full object-cover p-1"
            src="https://avatars.githubusercontent.com/u/1012351?v=4" // Replace with a dynamic image source
            alt="Profile Avatar"
          />
        </div>
        <div className="relative -mt-12">
          <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
          <p className="mt-2 text-sm text-gray-500">Frontend Developer</p>
          <p className="mt-4 text-gray-600">
            Passionate about building beautiful, accessible user interfaces and creating
            seamless user experiences.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#"
              className="rounded-full bg-gray-800 px-6 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-700"
            >
              Follow
            </a>
            <a
              href="#"
              className="rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-800 transition-colors duration-300 hover:bg-gray-200"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;