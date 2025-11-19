import { dev } from '$app/environment';

const MONTHLY_PRICE_ID = dev ? 'price_1SUoty2LAexX2d5LUxNc1YDx' : 'price_1SUkhO2LAexX2d5L7NpuAO5B';
const ANNUAL_PRICE_ID = dev ? 'price_1SUouF2LAexX2d5LRQy43KrZ' : 'price_1SUkhw2LAexX2d5LfjPENsFL';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { PUBLIC_HOST } from '$env/static/public';
const stripe = new Stripe(STRIPE_SECRET_KEY);
import { json, redirect, error } from '@sveltejs/kit';
export async function GET(event) {
	const paymentSchedule: 'monthly' | 'annual' =
		event.url.searchParams.get('paymentSchedule') === 'annually' ? 'annual' : 'monthly';
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				// Provide the exact Price ID (for example, price_1234) of the product you want to sell
				price: paymentSchedule === 'monthly' ? MONTHLY_PRICE_ID : ANNUAL_PRICE_ID,
				quantity: 1
			}
		],
		mode: 'subscription',
		success_url: `${PUBLIC_HOST}/pricing/subscribe/institution/success`,
		cancel_url: `${PUBLIC_HOST}/pricing/subscribe/institution/cancel`,
		automatic_tax: { enabled: true }
	});
	const redirectUrl = session.url;
	if (!redirectUrl) {
		return error(500, 'Failed to create checkout session');
	}
	return redirect(303, redirectUrl);
}
