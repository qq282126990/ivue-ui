<template>
    <div class="ivue-list-item-default">
        <IvueListItemContent rippleDisabled>
            <slot></slot>
        </IvueListItemContent>
    </div>
</template>

<script>
import IvueListItemMixin from './ivue-list-item-mixin';

export default {
    name: 'ivue-list-item-default',
    mixins: [IvueListItemMixin]
}
</script>
