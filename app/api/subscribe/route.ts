import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email format and school domain
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailLower = email.toLowerCase().trim()
    
    // Only accept @pdsb.net school emails
    if (!emailLower.endsWith('@pdsb.net')) {
      return NextResponse.json(
        { error: 'Please use your school email address (@pdsb.net)' },
        { status: 400 }
      )
    }

    const apiKey = process.env.MAILERLITE_API_KEY

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Add subscriber to MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: emailLower,
        status: 'active',
        groups: [],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('MailerLite API error:', data)
      
      // Handle specific error cases
      if (response.status === 409) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 400 }
        )
      }

      return NextResponse.json(
        { error: data.message || 'Failed to subscribe' },
        { status: response.status }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    )
  }
}
