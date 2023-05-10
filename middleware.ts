import { NextResponse } from 'next/server';

// 可以在這邊進行頁面導轉
// This function can be marked `async` if using `await` inside
export function middleware(request) {
	if (request.nextUrl.pathname.startsWith('/about')) {
		return NextResponse.rewrite(new URL('/login', request.url));
	}
}
