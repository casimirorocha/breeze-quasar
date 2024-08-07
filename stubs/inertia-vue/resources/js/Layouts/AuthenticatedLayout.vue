<script setup lang="ts">
import { ref } from 'vue'
import ApplicationLogo from '../Components/ApplicationLogo.vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
    <q-layout view="lHh LpR lFf">

        <q-header reveal elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <ApplicationLogo /> Title
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <slot />
        </q-page-container>

    </q-layout>
</template>
