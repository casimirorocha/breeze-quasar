<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
    <q-layout view="hHh lpR fFf">

        <q-header reveal elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <ApplicationLogo /> Title
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <slot />
        </q-page-container>

    </q-layout>
</template>
