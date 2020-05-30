<template>
  <div>
    <form>
      <div id="search-text">
        <slot name="search-text"></slot>
      </div>
      <div id="search-button">
        <slot name="search-button"></slot>
      </div>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
    </form>
  </div>
</template>
