import Navbar from "../../../islands/Navbar.tsx";

export default function Contents() {
  return (
    <div className="p-4 mx-auto max-w-screen-md">
      <Navbar/>
      <div className="font-semibold my-4">Probability</div>
      <section>
        <div>What is <span className="font-semibold">Probability</span>?</div>
        <div className="my-3">Probability is <span className="font-semibold">the measure of the likelihood of an event to occur</span>.</div>
        <br/>
        <div className="font-semibold underline">Important terms related to Probability</div>
        <div className="flex gap-2 my-2">
          <span>1.</span>
          <span className="font-semibold">Experiment: </span>
          <span>An <i>operation</i> which can produce some well-defined outcomes.</span>
        </div>
        <div className="flex gap-2 my-2">
          <span>2.</span>
          <span className="font-semibold">Event: </span>
          <span>Each <i>outcome</i> is called an event.</span>
        </div>
        <div className="flex gap-2 my-2">
          <span>3.</span>
          <span className="font-semibold">Random Experiment: </span>
          <span>An <i>experiment in which all possible outcomes are known and the exact outcome cannot be predicted in advance</i> is called a random experiment.</span>
        </div>
        <div className="flex gap-2 my-2">
          <span>4.</span>
          <span className="font-semibold">Trial: </span>
          <span>It means, <i>to perform a random experiment.</i></span>
        </div>
        <br/>
        <div className="underline">Let us see some experiments</div>
        <div className="my-2">
          <div className="font-semibold">Experiment 1</div>
          <div><i>Throwing a coin</i><br/>If we throw a coin and let it fall freely on the ground, then the upper face will show either <i>Head</i> or a <i>Tail</i>.</div>
          <div>Thus, all possible outcomes of this experiment are <span className="font-semibold">&#123;H, T&#125;</span></div>
        </div>
        <div className="my-2">
          <div className="font-semibold">Experiment 2</div>
          <div><i>Throwing two coins</i><br/>If we throw two coins and let them fall freely on the ground, then the upper faces of the two coins will show either <i>Head</i> or a <i>Tail</i>.</div>
          <div>Thus, all possible outcomes of this experiment are <span className="font-semibold">&#123;HH, HT, TH, TT&#125;</span></div>
        </div>
        <div className="my-2">
          <div className="font-semibold">Experiment 3</div>
          <div><i>Throwing a dice</i><br/>A dice is a solid cube in shape and it has 6 faces. Eace face is a square in shape. Each face are marked with single number starting from 1 till 6. So, if we throw the dice and let it fall freely on the ground, then the upper face is the outcome which will show either 1 or 2 or 3 or 4 or 5 or 6.</div>
          <div>Thus, all possible outcomes of this experiment are <span className="font-semibold">&#123;1, 2, 3, 4, 5, 6&#125;</span></div>
        </div>
      </section>
    </div>
  );
}
