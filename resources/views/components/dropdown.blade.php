@props(['align' => 'right', 'width' => '48', 'contentClasses' => 'py-1 rounded-lg bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-lg text-[#404ea6] dark:text-[#6962d1] overflow-hidden hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'])

@php
$alignmentClasses = match ($align) {
    'left' => 'ltr:origin-top-left rtl:origin-top-right start-0',
    'top' => 'origin-top',
    default => 'ltr:origin-top-right rtl:origin-top-left end-0',
};

$width = match ($width) {
    '48' => 'w-48',
    '24' => 'w-24',
    default => $width,
};
@endphp

<div class="relative" x-data="{ open: false }" @click.outside="open = false" @close.stop="open = false">

    <div @click="open = ! open">
        {{ $trigger }}
    </div>

    <div x-show="open"
            x-transition:enter="transition ease-out duration-200"
            x-transition:enter-start="opacity-0 scale-95"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-95"
            class="absolute z-50 mt-2 {{ $width }} rounded-md shadow-lg {{ $alignmentClasses }}"
            style="display: none;"
            @click="open = false">
        <div class="glass dropdown rounded-md ring-1 ring-black ring-opacity-5 {{ $contentClasses }}">
            <div class="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
                <div class="absolute top-0 left-0 w-72 h-full bg-gradient-to-br from-white/0 via-white/20 to-white/0 blur-2xl transform -rotate-12 animate-shimmer-slow"></div>
            </div>
            <div class="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
                <div class="shimmer absolute w-32 h-32 bg-gradient-to-br inset-0 from-white/0 via-white/50 to-white/0 blur-2xl overflow-hidden rounded-full pointer-events-none opacity-0 transition-opacity duration-150"></div>
            </div>
            {{ $content }}
        </div>
    </div>
</div>
