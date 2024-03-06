<script>
  import DogItem from "./DogItem.svelte";

  const dogs = [
    {
      id: 1,
      name: "German Shepherd",
      thumbnail:
        "https://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23188_german-shepherd-dog-300x189.jpg",
      details:
        "The German Shepherd Dog is one of America’s most popular dog breeds—for good reason. They’re intelligent and capable working dogs. Their devotion and courage are unmatched. And they’re amazingly versatile, excelling at most anything they’re trained to do: guide and assistance work for the handicapped, police and military service, herding, search and rescue, drug detection, competitive obedience, and–last but not least–faithful companion",
      bigPicture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/02.Owczarek_niemiecki_u%C5%BCytkowy_kr%C3%B3tkow%C5%82osy_suka.jpg/1920px-02.Owczarek_niemiecki_u%C5%BCytkowy_kr%C3%B3tkow%C5%82osy_suka.jpg"
    },
    {
      id: 2,
      name: "Siberian husky",
      thumbnail:
        "https://cdn3-www.dogtime.com/assets/uploads/2011/01/file_22948_siberian-husky-300x189.jpg",
      details:
        "The Siberian Husky is a beautiful dog breed with a thick coat that comes in a multitude of colors and markings. Their blue or multi-colored eyes and striking facial masks only add to the appeal of this breed, which originated in Siberia. It is easy to see why many are drawn to the Siberian’s wolf-like looks, but be aware that this athletic, intelligent dog can be independent and challenging for first-time dog owners. Huskies also put the “H” in Houdini and need a fenced yard that is sunk in the ground to prevent escapes",
      bigPicture:
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Black-Magic-Big-Boy.jpg"
    },
    {
      id: 3,
      name: "Doberman pinsher",
      thumbnail:
        "https://cdn1-www.dogtime.com/assets/uploads/2011/01/file_22920_doberman-pinscher-300x189.jpg",
      details:
        "The Doberman Pinscher was developed in Germany during the late 19th century, primarily as a guard dog. His exact ancestry is unknown, but he’s believed to be a mixture of many dog breeds, including the Rottweiler, Black and Tan Terrier, and German Pinscher. With his sleek coat, athletic build, and characteristic cropped ears and docked tail, the Doberman Pinscher looks like an aristocrat. He is a highly energetic and intelligent dog, suited for police and military work, canine sports, and as a family guardian and companion",
      bigPicture:
        "https://upload.wikimedia.org/wikipedia/commons/c/c0/0Doberman-40172501920.jpg"
    }
  ];
</script>

<section id="dogs">
  {#each dogs as dog}
    <DogItem name={dog.name} thumbnail={dog.thumbnail} id={dog.id} details={dog.details} bigPicture={dog.bigPicture}/>
  {/each}
</section>
