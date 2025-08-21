@props(['rotate'])

@php
$classes = ($rotate ?? false)
            ? 'glassCardRotate animate-fadeIn glass'
            : 'animate-fadeIn glass';
@endphp


<div {{ $attributes->merge(['class' => $classes]) }}>
    <div class="relative m-20 p-6 rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden">
        <div class="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
            <div class="absolute top-0 left-0 w-72 h-full bg-gradient-to-br from-white/0 via-white/20 to-white/0 blur-2xl transform -rotate-12 animate-shimmer-slow"></div>
        </div>

        <div class="shimmer absolute w-24 h-24 bg-gradient-to-br inset-0 from-white/0 via-white/30 to-white/0 blur-2xl overflow-hidden rounded-full pointer-events-none opacity-0 transition-opacity duration-150"></div>

        {{ $slot }}
    </div>
</div>
