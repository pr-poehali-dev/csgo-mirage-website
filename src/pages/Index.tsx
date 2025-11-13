import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updates = [
    {
      title: 'New Operation: Riptide',
      date: 'Nov 10, 2024',
      description: 'Experience the latest operation with exclusive maps, missions, and rewards.',
      badge: 'New',
    },
    {
      title: 'Weapon Balance Update',
      date: 'Nov 5, 2024',
      description: 'Major adjustments to AK-47 and M4A4 spray patterns for competitive balance.',
      badge: 'Update',
    },
    {
      title: 'Anti-Cheat Enhancement',
      date: 'Nov 1, 2024',
      description: 'VAC system upgraded with advanced machine learning detection algorithms.',
      badge: 'Security',
    },
  ];

  const stats = [
    { label: 'Active Players', value: '1.5M+', icon: 'Users' },
    { label: 'Daily Matches', value: '5.2M+', icon: 'Trophy' },
    { label: 'Pro Tournaments', value: '320+', icon: 'Star' },
    { label: 'Prize Pool', value: '$42M', icon: 'DollarSign' },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/1d1dba46-69ad-4691-813c-128b9bbbc232/files/edd7b2db-fde0-4b67-badf-ad62da06eb88.jpg',
    'https://cdn.poehali.dev/projects/1d1dba46-69ad-4691-813c-128b9bbbc232/files/43bc2b97-cc75-4da3-8a3e-5633c03a18c9.jpg',
    'https://cdn.poehali.dev/projects/1d1dba46-69ad-4691-813c-128b9bbbc232/files/6de13b65-6e3c-424c-8d62-b70b9e72cd04.jpg',
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary">CS2</h1>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#updates" className="text-foreground hover:text-primary transition-colors">Updates</a>
              <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Download" size={18} className="mr-2" />
            Play Now
          </Button>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/1d1dba46-69ad-4691-813c-128b9bbbc232/files/edd7b2db-fde0-4b67-badf-ad62da06eb88.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary/20 border-primary text-primary">
            Counter-Strike 2
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            THE TACTICAL
            <br />
            <span className="text-primary">FPS LEGEND</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the next generation of competitive gaming. Unmatched precision, strategic depth, and global competition.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Download Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
              <Icon name="Users" size={20} className="mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <section id="community" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 border-secondary text-secondary">Live Stats</Badge>
            <h2 className="text-5xl font-bold mb-4">Global Community</h2>
            <p className="text-xl text-muted-foreground">Join millions of players worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon name={stat.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-primary">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="updates" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 border-accent text-accent">Latest News</Badge>
            <h2 className="text-5xl font-bold mb-4">Recent Updates</h2>
            <p className="text-xl text-muted-foreground">Stay up to date with the latest changes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {updates.map((update, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 group">
                <CardContent className="pt-6">
                  <Badge className="mb-4" variant={update.badge === 'New' ? 'default' : 'secondary'}>
                    {update.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{update.date}</p>
                  <p className="text-foreground/80">{update.description}</p>
                  <Button variant="ghost" className="mt-4 p-0 text-primary hover:text-primary/80">
                    Read More
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 border-primary text-primary">Screenshots</Badge>
            <h2 className="text-5xl font-bold mb-4">Game Gallery</h2>
            <p className="text-xl text-muted-foreground">Witness the action and intensity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`CS2 Screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <Icon name="Maximize2" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">Counter-Strike 2</h3>
              <p className="text-muted-foreground">© 2024 Valve Corporation. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Twitch" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
