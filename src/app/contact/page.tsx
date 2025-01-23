'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} 


from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// Schema for contact form validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' }),
})

export default function ContactFormPreview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {'Contact-Type': 'application/json'},
        body: JSON.stringify(values),
      });
      
      if(response.ok){
        toast.success('Your message has been sent successfully!');
        form.reset();
      }
      else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to send your message. Please try again.');
      }

    } catch (error) {
      toast.error('Failed to send your message. Please try again.')
    }
  }

  return (
    <div id="contact" className="flex min-h-[60vh] h-full w-full items-center justify-center px-4 mt-8 mb-16 font-roboto">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle className='text-4xl font-roboto font-semibold text-center mb-4'>Contact Me</CardTitle>
          <CardDescription>
            Please fill out the form below and I'll get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel className='text-base'htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Please enter your full name"
                          type="text"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel className='text-base'htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="Please enter your email address"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel className='text-base' htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-blue-500 text-base font-semibold" >
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
