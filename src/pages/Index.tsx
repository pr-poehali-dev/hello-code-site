import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const courses = [
  {
    id: 1,
    title: 'Scratch для малышей',
    age: '6-8 лет',
    level: 'beginner',
    duration: '3 месяца',
    icon: 'Blocks',
    color: 'bg-purple-100',
    price: '4 900 ₽/мес',
    description: 'Создаём первые игры и мультфильмы в визуальной среде программирования'
  },
  {
    id: 2,
    title: 'Python Junior',
    age: '9-11 лет',
    level: 'beginner',
    duration: '6 месяцев',
    icon: 'Code2',
    color: 'bg-orange-100',
    price: '5 900 ₽/мес',
    description: 'Изучаем первый настоящий язык программирования через создание игр'
  },
  {
    id: 3,
    title: 'Web-разработка',
    age: '10-13 лет',
    level: 'intermediate',
    duration: '9 месяцев',
    icon: 'Globe',
    color: 'bg-blue-100',
    price: '6 900 ₽/мес',
    description: 'Создаём собственные сайты: HTML, CSS, JavaScript с нуля'
  },
  {
    id: 4,
    title: 'Minecraft программирование',
    age: '8-10 лет',
    level: 'beginner',
    duration: '4 месяца',
    icon: 'Gamepad2',
    color: 'bg-green-100',
    price: '5 400 ₽/мес',
    description: 'Программируем в любимой игре, создаём модификации и автоматизацию'
  },
  {
    id: 5,
    title: 'Unity Game Dev',
    age: '12-15 лет',
    level: 'advanced',
    duration: '12 месяцев',
    icon: 'Trophy',
    color: 'bg-pink-100',
    price: '7 900 ₽/мес',
    description: 'Разработка 2D и 3D игр на профессиональном движке Unity'
  },
  {
    id: 6,
    title: 'Mobile Apps',
    age: '13-16 лет',
    level: 'advanced',
    duration: '10 месяцев',
    icon: 'Smartphone',
    color: 'bg-indigo-100',
    price: '7 500 ₽/мес',
    description: 'Создаём мобильные приложения для iOS и Android'
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'Почему детям важно учиться программированию',
    date: '15 января 2026',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400'
  },
  {
    id: 2,
    title: 'Топ-5 проектов наших учеников',
    date: '10 января 2026',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400'
  },
  {
    id: 3,
    title: 'Как выбрать первый курс программирования',
    date: '5 января 2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400'
  }
];

const Index = () => {
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [activeSection, setActiveSection] = useState('home');

  const filteredCourses = courses.filter(course => {
    const ageMatch = selectedAge === 'all' || course.age.includes(selectedAge);
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel;
    return ageMatch && levelMatch;
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Icon name="Code2" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hello Code
            </span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            {['home', 'courses', 'about', 'blog', 'contacts'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-semibold transition-colors ${
                  activeSection === section ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'courses' && 'Курсы'}
                {section === 'about' && 'О школе'}
                {section === 'blog' && 'Блог'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </nav>

          <Button className="bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary/90 hover:to-orange-500/90">
            Пробный урок
          </Button>
        </div>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
                <Icon name="Sparkles" size={16} className="mr-1" />
                Онлайн-школа программирования
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Превращаем детей в{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  создателей игр
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Научим программировать через создание игр, сайтов и приложений. 
                Индивидуальные занятия с преподавателем в удобное время.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8"
                >
                  Выбрать курс
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8"
                >
                  Как это работает?
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-gray-600">учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-gray-600">преподавателей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4.9</div>
                  <div className="text-gray-600">рейтинг</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a7ead30e-0514-46d7-8d2d-38c65b9ba37c/files/43e7074b-a3d8-4c84-9589-3bbfc1c136ee.jpg"
                alt="Hello Code Robot"
                className="relative w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-1">
              <Icon name="Rocket" size={16} className="mr-1" />
              Наши курсы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Выбери свой путь в IT</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От создания первых игр до профессиональной разработки приложений
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-gray-700">Возраст:</span>
              <Tabs value={selectedAge} onValueChange={setSelectedAge}>
                <TabsList>
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="6-8">6-8 лет</TabsTrigger>
                  <TabsTrigger value="9-11">9-11 лет</TabsTrigger>
                  <TabsTrigger value="12+">12+ лет</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex gap-2 items-center">
              <span className="font-semibold text-gray-700">Уровень:</span>
              <Tabs value={selectedLevel} onValueChange={setSelectedLevel}>
                <TabsList>
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="beginner">Начинающий</TabsTrigger>
                  <TabsTrigger value="intermediate">Средний</TabsTrigger>
                  <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card 
                key={course.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden"
              >
                <div className={`h-3 ${course.color.replace('100', '500')}`}></div>
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={course.icon as any} size={32} className="text-gray-700" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {course.age}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {course.duration}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                      Записаться
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1">
                <Icon name="Star" size={16} className="mr-1" />
                О Hello Code
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                Мы учим детей создавать, а не потреблять
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello Code — это онлайн-школа, где каждый ребёнок становится создателем 
                собственных проектов. Наши преподаватели — практикующие разработчики, 
                которые знают, как увлечь программированием.
              </p>

              <div className="space-y-4">
                {[
                  { icon: 'Target', title: 'Индивидуальный подход', desc: 'Программа адаптируется под интересы ребёнка' },
                  { icon: 'Users', title: 'Живые занятия', desc: 'Онлайн-уроки с преподавателем в реальном времени' },
                  { icon: 'Award', title: 'Портфолио проектов', desc: 'Каждый ученик создаёт свои игры и приложения' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shrink-0">
                      <Icon name={item.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/a7ead30e-0514-46d7-8d2d-38c65b9ba37c/files/591ac726-ebc2-49d9-b998-7a4bb49a5595.jpg"
                alt="Learning"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
              <Icon name="BookOpen" size={16} className="mr-1" />
              Блог
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Полезные материалы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="p-6 space-y-3">
                  <div className="text-sm text-gray-500">{post.date}</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-1">
                <Icon name="Mail" size={16} className="mr-1" />
                Контакты
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Готовы начать обучение?</h2>
              <p className="text-xl text-gray-600">
                Запишитесь на бесплатный пробный урок и познакомьтесь с нашей методикой
              </p>
            </div>

            <Card className="p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-500 text-sm">Телефон</div>
                      <div className="text-lg font-bold">+7 (999) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-500 text-sm">Email</div>
                      <div className="text-lg font-bold">hello@hellocode.ru</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-500 text-sm">Telegram</div>
                      <div className="text-lg font-bold">@hellocode_school</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Имя ребёнка"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary outline-none transition-colors"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary outline-none transition-colors"
                  />
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary outline-none transition-colors">
                    <option>Возраст ребёнка</option>
                    <option>6-8 лет</option>
                    <option>9-11 лет</option>
                    <option>12-15 лет</option>
                    <option>16+ лет</option>
                  </select>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 h-12 text-lg">
                    Записаться на пробный урок
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Icon name="Code2" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">Hello Code</span>
              </div>
              <p className="text-gray-400">
                Онлайн-школа программирования для детей от 6 до 16 лет
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Курсы</h4>
              <div className="space-y-2 text-gray-400">
                <div>Scratch</div>
                <div>Python</div>
                <div>Web-разработка</div>
                <div>Unity</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <div className="space-y-2 text-gray-400">
                <div>О нас</div>
                <div>Преподаватели</div>
                <div>Отзывы</div>
                <div>Контакты</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                {['MessageCircle', 'Instagram', 'Youtube'].map((social) => (
                  <div 
                    key={social}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <Icon name={social as any} size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Hello Code. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
