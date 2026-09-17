<script setup lang="ts">
import { templateInfo } from '@/shared/config'
import { AppBadge } from '@/shared/ui'
</script>

<template>
  <header class="mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-6 py-20 lg:px-8">
    <nav
      class="mb-20 flex items-center justify-between"
      aria-label="Primary navigation"
    >
      <a
        class="flex items-center gap-3 font-semibold tracking-tight"
        href="#top"
      >
        <span class="grid size-9 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">F</span>
        FSD CLI
      </a>
      <a
        class="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
        :href="templateInfo.docsUrl"
      >
        Documentation
      </a>
    </nav>

    <div
      id="top"
      class="max-w-4xl"
    >
      <div class="flex flex-wrap gap-2">
        <AppBadge>{{ templateInfo.framework }} · TypeScript · FSD</AppBadge>
        <AppBadge
          v-for="item in templateInfo.stack"
          :key="item"
        >
          {{ item }}
        </AppBadge>
      </div>
      <h1 class="mt-8 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-7xl">
        A scalable Vue foundation,
        <span class="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
          ready from day one.
        </span>
      </h1>
      <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
        Complete Feature-Sliced Design layers, framework-native providers, and production tooling without rebuilding your architecture for every project.
      </p>

      <div class="mt-10 flex flex-col gap-4 sm:flex-row">
        <code class="rounded-xl border border-cyan-300/25 bg-cyan-300/8 px-5 py-3.5 text-sm text-cyan-100 sm:text-base">
          {{ templateInfo.commands.generateFeature }}
        </code>
        <a
          class="rounded-xl bg-white px-5 py-3.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 sm:text-base"
          :href="templateInfo.githubUrl"
        >
          Explore on GitHub
        </a>
      </div>
    </div>
  </header>
</template>
