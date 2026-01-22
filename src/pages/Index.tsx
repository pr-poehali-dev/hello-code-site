import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-200 to-purple-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #FFA726 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center py-8 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">LANDING PAGE</h1>
          <p className="text-xl md:text-2xl text-gray-800">Back to School</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm mx-4 rounded-t-3xl">
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b-2 border-gray-200 gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={20} />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={20} />
                <span>info@elemschool.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} />
                <span>Mon-Fri: 8 am - 2pm</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Facebook" size={20} className="cursor-pointer hover:text-primary transition-colors" />
              <Icon name="Music" size={20} className="cursor-pointer hover:text-primary transition-colors" />
              <Icon name="Instagram" size={20} className="cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>

          <nav className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-4 relative">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
              backgroundSize: '20px 20px'
            }}></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-8 text-base font-semibold">
                <a href="#" className="text-gray-900 hover:text-white transition-colors">Home</a>
                <a href="#" className="text-gray-900 hover:text-white transition-colors">Classes</a>
                <a href="#" className="text-gray-900 hover:text-white transition-colors underline decoration-2">About Us</a>
                <a href="#" className="text-gray-900 hover:text-white transition-colors">Gallery</a>
                <a href="#" className="text-gray-900 hover:text-white transition-colors">News</a>
                <a href="#" className="text-gray-900 hover:text-white transition-colors">Contact</a>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="User" size={24} />
                <span className="font-semibold">Sign up</span>
                <span className="text-gray-700">|</span>
                <span className="font-semibold">Log in</span>
              </div>
            </div>
          </nav>

          <div className="bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-400 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'radial-gradient(circle, #FFA726 3px, transparent 3px)',
              backgroundSize: '50px 50px'
            }}></div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-8 relative">
                <div className="absolute -left-4 top-0 text-6xl">✏️</div>
                <div className="absolute -left-8 bottom-32 text-5xl">🖍️</div>
                <div className="absolute left-20 -top-4 text-4xl">✨</div>
                <div className="absolute left-40 top-12 text-3xl">⭐</div>

                <div className="inline-block">
                  <div className="bg-white border-4 border-black rounded-3xl px-8 py-6 inline-block shadow-lg transform -rotate-1">
                    <h2 className="text-5xl md:text-6xl font-bold text-cyan-400">About Us</h2>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-gray-900 shadow-lg">
                  <p className="text-gray-900 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse 
                    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-12 -bottom-4 w-24 h-24 opacity-80">
                    <img src="https://cdn.poehali.dev/projects/a7ead30e-0514-46d7-8d2d-38c65b9ba37c/files/f7677a43-904d-4593-a922-0da9db68314b.jpg" alt="backpack" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute left-32 -bottom-8 text-5xl transform rotate-12">📝</div>
                  <div className="absolute -left-8 top-0 text-4xl">✏️</div>
                  
                  <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-xl px-10 py-6 rounded-2xl shadow-xl border-4 border-black font-bold">
                    See More
                  </Button>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute top-8 right-12 w-32 h-32 opacity-90 animate-bounce" style={{ animationDuration: '3s' }}>
                  <img src="https://cdn.poehali.dev/projects/a7ead30e-0514-46d7-8d2d-38c65b9ba37c/files/e1739554-770f-471d-8975-808d607dd3f9.jpg" alt="calculator" className="w-full h-full object-contain" />
                </div>

                <div className="absolute top-4 right-40 text-4xl animate-pulse">🖍️</div>
                <div className="absolute top-20 right-4 text-3xl">✨</div>
                <div className="absolute top-32 right-32 text-4xl">⭐</div>

                <div className="absolute bottom-20 right-4 w-28 h-28 opacity-90 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                  <img src="https://cdn.poehali.dev/projects/a7ead30e-0514-46d7-8d2d-38c65b9ba37c/files/d24cc135-2497-4b8b-99fb-a05aa15fdec2.jpg" alt="clock" className="w-full h-full object-contain" />
                </div>

                <div className="absolute bottom-32 right-24 text-5xl transform rotate-12">📋</div>
                <div className="absolute bottom-12 right-36 text-4xl">✏️</div>

                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-black rounded-[4rem] transform rotate-2"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 to-yellow-500 rounded-[4rem] p-2 border-4 border-black">
                    <img 
                      src="https://cdn.poehali.dev/projects/a7ead30e-0514-46d7-8d2d-38c65b9ba37c/bucket/421a3e60-5662-48ca-8c5b-9dcc2e494bf6.jpg" 
                      alt="Student"
                      className="rounded-[3.5rem] w-full h-auto"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-4 left-12 text-5xl transform -rotate-12">📧</div>
                <div className="absolute bottom-8 left-4 text-4xl">📝</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
