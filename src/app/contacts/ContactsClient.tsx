"use client";

import MarketingLayout from "@/components/marketing/MarketingLayout";
import { Mail, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactsClient() {
  const { language } = useLanguage();

  return (
    <MarketingLayout>
      <section className="bg-gradient-to-br from-fiitsa-light via-white to-fiitsa-light py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-fiitsa-dark md:text-5xl">
            {language === "fr" ? "Contactez-nous" : "Contact us"}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            {language === "fr"
              ? "Notre équipe est là pour vous accompagner. Choisissez le canal qui vous convient le mieux."
              : "Our team is here to support you. Choose the channel that suits you best."}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-fiitsa-dark">
                  {language === "fr" ? "Envoyez-nous un message" : "Send us a message"}
                </CardTitle>
                <p className="text-gray-600">
                  {language === "fr" ? "Nous vous répondrons dans les 24h maximum" : "We will respond within 24 hours"}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">{language === "fr" ? "Prenom" : "First name"}</Label>
                      <Input id="firstname" placeholder={language === "fr" ? "Votre prenom" : "Your first name"} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">{language === "fr" ? "Nom" : "Last name"}</Label>
                      <Input id="lastname" placeholder={language === "fr" ? "Votre nom" : "Your last name"} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder={language === "fr" ? "votre@email.com" : "your@email.com"} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{language === "fr" ? "Téléphone (optionnel)" : "Phone (optional)"}</Label>
                    <Input id="phone" placeholder="+237 XX XX XX XX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{language === "fr" ? "Sujet" : "Subject"}</Label>
                    <Input id="subject" placeholder={language === "fr" ? "Objet de votre message" : "Subject of your message"} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder={language === "fr" ? "Decrivez votre demande en detail..." : "Describe your request in detail..."}
                      rows={6}
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light text-white">
                    <Send className="mr-2 h-4 w-4" />
                    {language === "fr" ? "Envoyer le message" : "Send message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-fiitsa-dark">
                    {language === "fr" ? "Nos coordonnées" : "Our contact information"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-fiitsa-purple/10">
                      <Mail className="h-5 w-5 text-fiitsa-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fiitsa-dark">Email</h3>
                      <p className="text-gray-600">hello@fiitsa.com</p>
                      <p className="text-sm text-gray-500">
                        {language === "fr" ? "Support technique et commercial" : "Technical and commercial support"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fiitsa-dark">WhatsApp</h3>
                      <a href="https://wa.me/237655281628" className="text-green-600 transition-colors hover:text-green-700">
                        +33 7 63 47 79 07
                      </a>
                      <p className="text-sm text-gray-500">
                        {language === "fr" ? "Support prioritaire 24/7" : "Priority support 24/7"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-100">
                      <Clock className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fiitsa-dark">{language === "fr" ? "Horaires" : "Hours"}</h3>
                      <p className="text-gray-600">
                        {language === "fr" ? "Lun - Ven" : "Mon - Fri"} : 8h - 18h (GMT)
                        <br />
                        {language === "fr" ? "Sam" : "Sat"} : 9h - 15h (GMT)
                        <br />
                        <span className="font-medium text-green-600">WhatsApp 24/7</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
