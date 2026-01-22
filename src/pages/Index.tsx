import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const courses = [
  {
    id: 1,
    title: 'Scratch',
    age: '6-9 лет',
    price: 3990,
    lessons: 8,
    duration: '1 месяц',
    icon: 'Blocks',
    features: ['Визуальное программирование', 'Создание игр', 'Основы алгоритмов']
  },
  {
    id: 2,
    title: 'Python',
    age: '10-14 лет',
    price: 4990,
    lessons: 12,
    duration: '3 месяца',
    icon: 'Code2',
    features: ['Первый язык программирования', 'Игры и боты', 'Реальные проекты']
  },
  {
    id: 3,
    title: 'Web-разработка',
    age: '12-16 лет',
    price: 5990,
    lessons: 16,
    duration: '4 месяца',
    icon: 'Globe',
    features: ['HTML, CSS, JavaScript', 'Свои сайты', 'Портфолио проектов']
  }
];

const reviews = [
  {
    id: 1,
    name: 'Елена Смирнова',
    text: 'Сын занимается 4 месяца — создал уже 3 игры! Преподаватель умеет заинтересовать, теперь программирование любимое хобби.',
    rating: 5,
    child: 'Максим, 11 лет'
  },
  {
    id: 2,
    name: 'Андрей Петров',
    text: 'Отличная школа! Дочка научилась делать сайты и даже помогла мне с визиткой для бизнеса. Очень довольны.',
    rating: 5,
    child: 'София, 13 лет'
  },
  {
    id: 3,
    name: 'Мария Козлова',
    text: 'Пробный урок понравился сразу. Преподаватель нашёл подход к ребёнку, объясняет понятно. Продолжаем обучение!',
    rating: 5,
    child: 'Артём, 9 лет'
  }
];

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', age: '' });

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Code2" className="text-white" size={22} />
            </div>
            <span className="text-xl font-bold">Hello Code</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-gray-600 hover:text-primary transition-colors font-medium">Курсы</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors font-medium">О школе</a>
            <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors font-medium">Отзывы</a>
            <Button size="sm" className="bg-primary hover:bg-primary/90">Пробный урок</Button>
          </nav>

          <Button size="sm" className="md:hidden bg-primary">Записаться</Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary border-0 px-3 py-1 text-sm font-medium">
                Онлайн-школа программирования для детей
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Научим вашего ребёнка{' '}
                <span className="text-primary">программировать</span>
              </h1>
              
              <p className="text-xl text-gray-600">
                Индивидуальные онлайн-занятия с опытными преподавателями. 
                Первый урок — бесплатно!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                  Попробовать бесплатно
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 text-lg">
                  Посмотреть курсы
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t">
                <div>
                  <div className="text-3xl font-bold text-primary">3500+</div>
                  <div className="text-sm text-gray-600 mt-1">учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-gray-600 mt-1">довольных</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2 года</div>
                  <div className="text-sm text-gray-600 mt-1">работаем</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a7ead30e-0514-46d7-8d2d-38c65b9ba37c/files/1978a4ea-7b11-4948-8ffb-f903cddd6ec2.jpg"
                alt="Kids learning coding"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему Hello Code?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы знаем, как увлечь детей программированием
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Video', title: 'Онлайн в Zoom', desc: 'Занимайтесь из любой точки мира' },
              { icon: 'User', title: 'Индивидуально', desc: 'Преподаватель работает только с вашим ребёнком' },
              { icon: 'Clock', title: 'Гибкий график', desc: 'Выбирайте удобное время для занятий' },
              { icon: 'Trophy', title: 'Реальные проекты', desc: 'Ребёнок создаёт игры и сайты с первого урока' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши курсы</h2>
            <p className="text-xl text-gray-600">От первых шагов до профессиональной разработки</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course) => (
              <Card key={course.id} className="border-2 hover:border-primary transition-all hover:shadow-2xl">
                <CardContent className="p-8 space-y-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon name={course.icon as any} className="text-white" size={28} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="Users" size={14} />
                      <span>{course.age}</span>
                      <span className="mx-1">•</span>
                      <Icon name="Calendar" size={14} />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Icon name="Check" size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{course.price} ₽</span>
                      <span className="text-gray-500 text-sm">/ {course.lessons} уроков</span>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Записаться на курс
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы родителей</h2>
            <p className="text-xl text-gray-600">Что говорят о нас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.child}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Запишитесь на бесплатный пробный урок</h2>
                <p className="text-lg text-purple-100">
                  Познакомимся с ребёнком, покажем платформу и создадим первый проект
                </p>
                <ul className="space-y-3">
                  {['Длительность 30 минут', 'Индивидуальное занятие', 'Подберём курс'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-orange-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8 space-y-4">
                  <Input 
                    placeholder="Имя ребёнка" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                  <Input 
                    placeholder="Ваш телефон" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12"
                  />
                  <Input 
                    placeholder="Возраст ребёнка" 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="h-12"
                  />
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-base font-semibold">
                    Записаться на пробный урок
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" className="text-white" size={22} />
                </div>
                <span className="text-xl font-bold">Hello Code</span>
              </div>
              <p className="text-gray-400 text-sm">
                Онлайн-школа программирования для детей от 6 до 16 лет
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Scratch</div>
                <div>Python</div>
                <div>Web-разработка</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>hello@hellocode.ru</div>
                <div>+7 (999) 123-45-67</div>
                <div>Пн-Пт: 9:00 - 20:00</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                {['Instagram', 'Youtube', 'MessageCircle'].map((social) => (
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Hello Code. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;