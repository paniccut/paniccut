<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DetectTheme
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $theme = $request->cookies->get('theme', 'light');

        view()->share('theme', $theme);

        $response = $next($request);
        $response->headers->set('Accept-CH', 'Sec-CH-Prefers-Color-Scheme');

        return $response;
    }
}
