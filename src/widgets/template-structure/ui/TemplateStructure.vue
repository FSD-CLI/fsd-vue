<script setup lang="ts">
const layers = [
  ['app', 'Bootstrap, providers, routing, global styles'],
  ['pages', 'Route-level screen composition'],
  ['widgets', 'Large reusable interface blocks'],
  ['features', 'User actions and business capabilities'],
  ['entities', 'Business objects and representations'],
  ['shared', 'Framework-agnostic infrastructure and UI'],
]
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <div class="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
          Dependency direction
        </p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          A structure that explains itself.
        </h2>
        <p class="mt-6 max-w-xl leading-7 text-slate-400">
          Higher layers compose lower layers. Public APIs keep slice boundaries explicit as the codebase and team grow.
        </p>
      </div>

      <ol
        class="space-y-3"
        aria-label="Feature-Sliced Design layers"
      >
        <li
          v-for="([name, description], index) in layers"
          :key="name"
          class="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.05]"
        >
          <span class="font-mono text-sm text-slate-600">0{{ index + 1 }}</span>
          <div>
            <p class="font-mono text-base text-cyan-200">
              src/{{ name }}/
            </p>
            <p class="mt-1 text-sm text-slate-400">
              {{ description }}
            </p>
          </div>
        </li>
      </ol>
    </div>

    <footer class="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>FSD CLI · Vue + Vite template</p>
      <p>Start with structure. Scale with confidence.</p>
    </footer>
  </section>
</template>
