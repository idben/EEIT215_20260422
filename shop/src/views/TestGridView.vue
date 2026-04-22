<script setup></script>
<template>
    <h1>測試 Bootstrap 格狀系統</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6- g-2">
        <!-- .col*12>.h200px.bg-info>{$} -->
        <div class="col">
            <div class="h200px ">
                <div class="card bg-info h-100">1</div>
            </div>
        </div>
        <div class="col">
            <div class="h200px bg-info">2</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">3</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">4</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">5</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">6</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">7</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">8</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">9</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">10</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">11</div>
        </div>
        <div class="col">
            <div class="h200px bg-info">12</div>
        </div>
    </div>
</template>
<style scoped>
.h200px {
    height: 200px;
}
</style>