<script setup lang="ts">
import { AppCard } from '@/shared/ui'

const features = [
  {
    eyebrow: 'Architecture',
    title: 'Complete FSD layers',
    description: 'App, pages, widgets, features, entities, and shared are ready before the first feature lands.',
  },
  {
    eyebrow: 'Vue native',
    title: 'Pinia + Vue Query',
    description: 'Providers follow Vue application conventions instead of translating React patterns into Vue.',
  },
  {
    eyebrow: 'Forms',
    title: 'VeeValidate + Zod',
    description: 'Typed validation is part of the default stack and available to generated feature slices.',
  },
  {
    eyebrow: 'Guardrails',
    title: 'Steiger + ESLint',
    description: 'Architecture, code quality, build, audit, and commit checks are wired into local hooks and CI.',
  },
]
</script>

<template>
  <section class="border-y border-white/10 bg-white/[0.025] py-24">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mb-12 max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Built for real teams
        </p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          The boring setup work is already done.
        </h2>
      </div>
      <div class="grid gap-5 md:grid-cols-2">
        <AppCard
          v-for="feature in features"
          :key="feature.title"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            {{ feature.eyebrow }}
          </p>
          <h3 class="mt-4 text-xl font-semibold text-white">
            {{ feature.title }}
          </h3>
          <p class="mt-3 leading-7 text-slate-400">
            {{ feature.description }}
          </p>
        </AppCard>
      </div>
    </div>
  </section>
</template>
