<template>
  <main>
    
    <header>
      <h1>
        <router-link to="/"> RECEPTIA </router-link>
      </h1>
    </header>

    <article>

      <router-view></router-view>

      <aside>
        <nav>
          <router-link to="/foods/burgers">Burgers</router-link>
          <router-link to="/foods/soups">Soups</router-link>
          <router-link to="/foods/desserts">Desserts</router-link>
        </nav>
      </aside>

    </article>

  </main>
</template>

<style src="./assets/style.css"></style>