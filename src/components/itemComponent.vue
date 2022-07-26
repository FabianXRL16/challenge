<template>
    <div class="col-xs-1 col-sm-2 col-md-4 col-lg-3">
        <b-card
        title="American Captain"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2"
    >
        <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Editar</b-button>
        <template #footer>
            <em>Modify: 13/12/1998</em>
        </template>
    </b-card>
    </div>
</template>

<script>
export default {
  name: "ItemComponent"
  }
</script>