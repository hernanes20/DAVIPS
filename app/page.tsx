"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Star } from "lucide-react"
import Image from "next/image"

export default function LoveDeclarationPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showHearts, setShowHearts] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowHearts(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const sections = [
    {
      id: "intro",
      title: "Para Você, Meu Amor",
      content: "Criei este cantinho especial para te dizer o quanto você significa para mim...",
    },
    {
      id: "declaration",
      title: "Minha Declaração",
      content:
        "Você é a razão do meu sorriso todos os dias. Cada momento ao seu lado é um presente que guardo no coração.",
    },
    {
      id: "memories",
      title: "Nossas Memórias",
      content:
        "Desde o primeiro olhar até este momento, cada segundo construiu nossa história de amor única e especial.",
    },
    {
      id: "future",
      title: "Nosso Futuro",
      content: "Quero viver mil aventuras ao seu lado, criar memórias inesquecíveis e te amar cada dia mais.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Floating Hearts Animation */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-secondary/30 animate-bounce"
              size={20 + Math.random() * 20}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <header className="text-center py-12 px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-primary animate-pulse" size={32} />
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary">Meu amor Ju</h1>
          <Sparkles className="text-primary animate-pulse" size={32} />
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Um site feito com todo carinho para expressar meus sentimentos mais verdadeiros
        </p>

        <div className="mt-8 flex flex-col lg:flex-row gap-6 items-center justify-center max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image
                src="/images/couple-photo-1.jpg"
                alt="Nossa foto especial juntos"
                width={280}
                height={350}
                className="rounded-lg shadow-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image
                src="/images/couple-photo-2.jpg"
                alt="Momentos especiais nossos"
                width={280}
                height={350}
                className="rounded-lg shadow-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image
                src="/images/couple-collage.jpg"
                alt="Colagem dos nossos momentos especiais e nossos gatinhos"
                width={280}
                height={350}
                className="rounded-lg shadow-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-12">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {sections.map((section, index) => (
            <Button
              key={section.id}
              variant={currentSection === index ? "default" : "outline"}
              onClick={() => setCurrentSection(index)}
              className="transition-all duration-300 hover:scale-105"
            >
              {section.title}
            </Button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className={`transition-all duration-500 transform ${
                currentSection === index ? "opacity-100 scale-100 shadow-lg" : "opacity-50 scale-95"
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Star className="text-secondary" size={24} />
                  <h2 className="font-serif text-3xl font-bold text-primary">{section.title}</h2>
                  <Star className="text-secondary" size={24} />
                </div>
                <p className="text-lg leading-relaxed text-foreground max-w-2xl mx-auto">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Message */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <Heart className="mx-auto mb-4 text-secondary animate-pulse" size={48} />
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Te Amo Infinitamente</h3>
            <p className="text-lg text-foreground italic">
              "O amor não se vê com os olhos, mas com o coração, e por isso é representado cego."
            </p>
            <p className="text-sm text-muted-foreground mt-2">- William Shakespeare</p>
          </CardContent>
        </Card>

        {/* Interactive Heart Button */}
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            onClick={() => setShowHearts(!showHearts)}
          >
            <Heart className="mr-2" size={20} />
            Clique para mais amor
            <Heart className="ml-2" size={20} />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-border/50">
        <p className="text-muted-foreground">Feito com muito ❤️ especialmente para você</p>
      </footer>
    </div>
  )
}
