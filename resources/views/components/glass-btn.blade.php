@props(['rotate'])

@php
$classes = ($rotate ?? false)
            ? 'glassCardRotate animate-fadeIn glass'
            : 'animate-fadeIn glass';
@endphp

<button {{ $attributes->merge(['class' => $classes]) }}>
    <div class="rounded-lg bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-lg text-[#404ea6] dark:text-[#6962d1] hover:outline-none transition ease-in-out duration-150">
        <div class="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
            <div class="absolute top-0 left-0 w-72 h-full bg-gradient-to-br from-white/0 via-white/20 to-white/0 blur-2xl transform -rotate-12 animate-shimmer-slow"></div>
        </div>

        <div class="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
            <div class="shimmer absolute w-32 h-32 bg-gradient-to-br inset-0 from-white/0 via-white/50 to-white/0 blur-2xl overflow-hidden rounded-full pointer-events-none opacity-0 transition-opacity duration-150"></div>
        </div>

        {{ $slot }}
    </div>
</button>
